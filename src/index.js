//import "./pages/index.css";

//2. Импорт переменных из файла констант: 
import {
        formEditProfile,
        buttonAddCard,
        buttonEditProfile,
        popupFormAddPlace,
        popupFullsizeImage,
        popupFormButtonSavePlace,
        buttonEditAvatar,
        buttonSaveAvatar,
        formEditAvatar
} from "./scripts/utils/constants.js";

import {Section} from "./scripts/components/Section.js";
import {Card} from "./scripts/components/Card.js";
import {Api} from "./scripts/components/Api.js";

//3. Импорт класса валидатора:
import {FormValidator} from "./scripts/components/FormValidator.js";

//3.2. Импорт классов модальных окон:
import {PopupWithFullSizeImage} from "./scripts/components/PopupWithFullSizeImage.js";
import {PopupWithForm} from "./scripts/components/PopupWithForm.js";
import {PopupWithButton} from "./scripts/components/PopupWithButton.js";

import {UserInfo} from "./scripts/components/UserInfo.js";

//5. Импорт настроек валидации:
import {apiSettings,
        validationSettings
} from "./scripts/settings/settings.js";

//6. Импорт селекторов:
import {selectors} from "./scripts/settings/selectors.js";

import {enableOpenPopupButton} from "./scripts/utils/utils.js";

const api = new Api(apiSettings);

const currentUserInfo = new UserInfo(selectors);

let userId = null;

const openedPopupWithFullSizeImage = new PopupWithFullSizeImage(selectors.popupFullSizeImage);

const popupConfirmDeletingCard = new PopupWithButton(
        {popupSelector: selectors.popupDeleteCardSelector,
         handleConfirmDeletingCard:()=>{
            return popupConfirmDeletingCard.getDeleteButton();
         }
});
popupConfirmDeletingCard.setEventListeners();

//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation(formEditProfile, validationSettings);

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);
formCardValidator.enableValidation(popupFormAddPlace, validationSettings);

const formEditAvatarValidator = new FormValidator(validationSettings, formEditAvatar);
formEditAvatarValidator.enableValidation(formEditAvatar, validationSettings);

const createCard = (cardData) => {
        const card = new Card({
          data: {...cardData, currentUserId: userId},
          handleCardClick:()=>{
                openedPopupWithFullSizeImage.
                openFullSizeImage(cardData.name, cardData.link)
          },
          handleLikeCard:()=>{
              const currentLikeStatus = !card.confirmLikeStatus();
              api.likeCard(card.getCardId(), currentLikeStatus)
              .then(currentCardData =>{
                card.updateLikesCount(currentCardData);
                console.log('Card liked sucesfully', currentCardData.likes);
                })
            .catch(err => console.log(`Ошибка лайка карточки: ${err}`))
          },
          handleDeleteCard: () =>{
                popupConfirmDeletingCard.openPopup();
                const deleteButton = popupConfirmDeletingCard.handleConfirmDeletingCard();
                deleteButton.addEventListener('click',()=>{
                     popupConfirmDeletingCard.changeButtonText(true);
                     api.deleteCard(card.getCardId())
                     .then(()=> {card.deleteCurrentCard(card);
                                 popupConfirmDeletingCard.closePopup()})
                     .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
                     .finally(() => {popupConfirmDeletingCard.changeButtonText(false)
                                     console.log('Card deleted sucesfully!')});
                })
          }
        }, selectors.template);
     return card.generateCard();
};

const cardsSection = new Section({
        renderer: (data) =>{
            cardsSection.addElement(createCard(data));
        }
}, selectors.cardsContainer);

//Класс: создаем новый попап с формой для попапа добавления карточки
const popupAddCard = new PopupWithForm({
        popupSelector: selectors.popupAddCardSelector,
        handleFormSubmit:(formData) =>{
            popupAddCard.changeButtonText(true);
            api.addCard(formData.addPlaceName, formData.addPlaceUrl)
            .then((data)=>{
                    console.log("New card:", data,"uploaded sucesfully!");
                    cardsSection.addElement(createCard(data));
                })
            .catch((err) => console.log(`Ошибка создания новой карточки: ${err}`))
            .finally(() => popupAddCard.changeButtonText(false));
            popupAddCard.closePopup();
        }
});
popupAddCard.setEventListeners();

enableOpenPopupButton(buttonAddCard, popupAddCard, popupFormButtonSavePlace, validationSettings);

const popupEditProfile = new PopupWithForm(
        {popupSelector: selectors.popupEditProfileSelector,
         handleFormSubmit:(formData)=>{
             popupEditProfile.changeButtonText(true);
             api.setUser(formData)                    
              .then((data)=>{
                currentUserInfo.setUserInfo(data);
                popupEditProfile.closePopup();
            }).catch((err) => console.log(`Ошибка при обновлении данных пользователя: ${err}`)
            ).finally(() => popupEditProfile.changeButtonText(false));
        }
});
popupEditProfile.setEventListeners();

enableOpenPopupButton(buttonEditProfile, popupEditProfile, popupFormButtonSavePlace, validationSettings);

const popupEditAvatar = new PopupWithForm(
        {popupSelector: selectors.popupEditAvatarSelector,
         handleFormSubmit:(formData)=>{
            popupEditAvatar.changeButtonText(true);
            api.editAvatar(formData.avatarUrl)
            .then((data) =>{
                console.log('Avatar ',data,' changed sucesfully');
                currentUserInfo.setUserAvatar(data);
                popupEditAvatar.closePopup();
            }).catch((err) => console.log(`Ошибка при обновлении автара: ${err}`)
            ).finally(() => {popupEditAvatar.changeButtonText(false)});
        }
});
popupEditAvatar.setEventListeners();

enableOpenPopupButton(buttonEditAvatar, popupEditAvatar, buttonSaveAvatar, validationSettings);

Promise.all([api.getCards(), api.getUser()])
  .then(([cardsData, userData]) => {
    userId = userData._id
    currentUserInfo.setUserInfo(userData);
    currentUserInfo.setUserAvatar(userData);
    cardsSection.renderItems(cardsData);
}).catch(err => console.log(`Ошибка загрузки данных: ${err}`));
