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

//let userId = null;

const openedPopupWithFullSizeImage = new PopupWithFullSizeImage(selectors.popupFullSizeImage);

const popupConfirmDeletingCard = new PopupWithButton(
        {popupSelector: selectors.popupDeleteCardSelector,
         handleConfirmDeletingCard:()=>{}
});
popupConfirmDeletingCard.setEventListeners();

//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation(formEditProfile, validationSettings);

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);
formCardValidator.enableValidation(popupFormAddPlace, validationSettings);

const formEditAvatarValidator = new FormValidator(validationSettings, formEditAvatar);
formEditAvatarValidator.enableValidation(formEditAvatar, validationSettings);

const createCard = (data) => {
        const card = new Card({
          data,
          confirmCardOwner:()=>{
            api.getUser()
            .then(userData => {showDeleteButton(card, userData._id)})
            .catch(err => console.log(`Ошибка подтверждения владельца карточки: ${err}`));
          },
          handleCardClick:()=>{
                openedPopupWithFullSizeImage.
                openFullSizeImage(data.name, data.link)
          },
          handleLikeCard:()=>{
            api.likeCard(card.cardId(), card.confirmLikeStatus())
            .then(data => {updateLikesCount(data)})
            .catch(err => console.log(`Ошибка лайка карточки: ${err}`))
          },
          handleDeleteCard: (data) => {
                popupConfirmDeletingCard.openPopup();
                popupConfirmDeletingCard.handleConfirmDeletingCard(()=>{
                        popupConfirmDeletingCard.changeButtonText(true);
                        api.deleteCard(data._id)
                        .then(()=> {card.deleteCurrentCard(card);
                                popupConfirmDeletingCard.closePopup()})
                        .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
                        .finally(() => popupConfirmDeletingCard.changeButtonText(false));
                })
           }
        }, selectors.template);
     return card.generateCard();
};

//Класс: создаем новый попап с формой для попапа добавления карточки
const popupAddCard = new PopupWithForm({
        popupSelector: selectors.popupAddCardSelector,
        handleFormSubmit:(formData) =>{
            popupAddCard.changeButtonText(true);
            api.addCard(formData.addPlaceName, formData.addPlaceUrl)
            .then((data)=>{createCard(data)})
            .catch((err) => console.log(`Ошибка создания новой карточки: ${err}`))
            .finally(() => popupAddCard.changeButtonText(false));
            popupAddCard.closePopup();
        }
});
popupAddCard.setEventListeners();

enableOpenPopupButton(buttonAddCard, popupAddCard, popupFormButtonSavePlace, validationSettings);

const cardsSection = new Section({
    renderer: (data) =>{
        //console.log(data.likes);
        const newCard = createCard(data);
        cardsSection.addElement(newCard);
    }     
}, selectors.cardsContainer);

const popupEditProfile = new PopupWithForm(
        {popupSelector: selectors.popupEditProfileSelector,
         handleFormSubmit:(formData)=>{
             popupEditProfile.changeButtonText(true);
             api.setUser({
                name: formData.editProfileName,
                info: formData.editProfileJob
             })                    
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
            api.editAvatar(formData)
            .then((data) =>{
            currentUserInfo.setUserAvatar(data);
            popupEditAvatar.closePopup();
            }).catch((err) => console.log(`Ошибка при обновлении автара: ${err}`)
            ).finally(() => popupEditAvatar.changeButtonText(false));
        }
});
popupEditAvatar.setEventListeners();

enableOpenPopupButton(buttonEditAvatar, popupEditAvatar, buttonSaveAvatar, validationSettings);

Promise.all([api.getCards(), api.getUser()])
  .then(([cardsData, userData]) => {
    
    currentUserInfo.setUserInfo(userData);
    currentUserInfo.setUserAvatar(userData.avatar);
    
    cardsSection.renderItems(cardsData);
   
}).catch(err => console.log(`Ошибка загрузки данных: ${err}`));