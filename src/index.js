import "./pages/index.css";

//1. Импорт переменных из файла констант: 
import {formEditProfile,
        buttonAddCard,
        buttonEditProfile,
        popupFormAddPlace,
        popupFormButtonSavePlace,
        buttonEditAvatar,
        buttonSaveAvatar,
        formEditAvatar,
        formFieldName,
        formFieldJob,
<<<<<<< HEAD
        fullsizeImage,
        fullsizeImageTitle
=======
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
} from "./scripts/utils/constants.js";

//2. Импорт компонентов:
import {Section} from "./scripts/components/Section.js";
import {Card} from "./scripts/components/Card.js";
import {Api} from "./scripts/components/Api.js";
import {FormValidator} from "./scripts/components/FormValidator.js";
import {PopupWithFullSizeImage} from "./scripts/components/PopupWithFullSizeImage.js";
import {PopupWithForm} from "./scripts/components/PopupWithForm.js";
import {PopupWithButton} from "./scripts/components/PopupWithButton.js";
import {UserInfo} from "./scripts/components/UserInfo.js";

//3. Импорт настроек:
import {apiSettings,
        validationSettings
} from "./scripts/settings/settings.js";

//4. Импорт селекторов:
import {selectors} from "./scripts/settings/selectors.js";

//5. Импорт отдельных функций
import {enableOpenPopupButton,
        enableButtonOpenPopupEditProfile,
<<<<<<< HEAD
        //deleteCurrentCard
        //createCard
} from "./scripts/utils/utils.js";

let currentUserId = null;
=======
        createNewCard} from "./scripts/utils/utils.js";
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974

const api = new Api(apiSettings);

const currentUserInfo = new UserInfo(selectors);

<<<<<<< HEAD
const openedPopupWithFullSizeImage = new PopupWithFullSizeImage({
      popupSelector: selectors.popupFullSizeImage,
      fullSizeImagePic: fullsizeImage,
      fullsizeImageTitle: fullsizeImageTitle
});
openedPopupWithFullSizeImage.setEventListeners();
=======
const openedPopupWithFullSizeImage = new PopupWithFullSizeImage(selectors.popupFullSizeImage);
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974

const popupConfirmDeletingCard = new PopupWithButton({
        popupSelector: selectors.popupDeleteCardSelector,
        handleConfirmDeletingButton:()=>{}
});
popupConfirmDeletingCard.setEventListeners();

//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation();

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);
formCardValidator.enableValidation();

const formEditAvatarValidator = new FormValidator(validationSettings, formEditAvatar);
formEditAvatarValidator.enableValidation();

<<<<<<< HEAD
const createNewCard =(cardData)=>{
        const currentCard = new Card({
          data: cardData,
          userId: currentUserId,
          handleCardClick:()=>{
              openedPopupWithFullSizeImage.
              openFullSizeImage(cardData.name, cardData.link);
          },
          handleLikeCard:()=>{
              const currentLikeStatus = !currentCard.confirmLikeStatus(currentUserId);
              api.likeCard(cardData._id, currentLikeStatus)
              .then(currentCardData =>{
                //console.log(`current Like status in createNewCard: ${currentLikeStatus}`);
                currentCard.updateLikesCount(currentCardData);
                //console.log('Лайк карточки успешно поставлен', currentCardData.likes);
              })
              .catch(err => console.log(`Ошибка лайка карточки: ${err}`))
          },
          handleDeleteCard:() =>{
                popupConfirmDeletingCard.openPopup();
                popupConfirmDeletingCard.setSubmitAction(()=>{
                        popupConfirmDeletingCard.changeButtonText(true)
                        api.deleteCard(cardData._id)
                        .then(()=> {currentCard.deleteCurrentCard(currentCard);
                                    popupConfirmDeletingCard.closePopup();
                        })
                        .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
                        .finally(() => {popupConfirmDeletingCard.changeButtonText(false)
                        //console.log(`Card ${cardData.name} deleted sucesfully`)
                        })
                })}
        }, selectors.template)
    return currentCard.generateCard();
};

//Рендеринг секции с карточками:
const cardsSection = new Section({
        renderer: (data) =>{
                const currentCard = createNewCard(data);
=======
//Рендеринг секции с карточками:
const cardsSection = new Section({
        renderer: (data) =>{
                const currentCard = createNewCard(data, Card, api, 
                        openedPopupWithFullSizeImage, 
                        popupConfirmDeletingCard, selectors.template);
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
                cardsSection.addElement(currentCard);
        }
}, selectors.cardsContainer);

//Класс: создаем новый попап с формой для попапа добавления карточки
const popupAddCard = new PopupWithForm({
        popupSelector: selectors.popupAddCardSelector,
        handleFormSubmit:(formData) =>{
            popupAddCard.changeButtonText(true);
            api.addCard(formData.addPlaceName, formData.addPlaceUrl)
            .then((newCardData)=>{
<<<<<<< HEAD
                    const createdCard = createNewCard(newCardData);
                     cardsSection.addElement(createdCard);
=======
                    const createdCard = createNewCard(newCardData, Card, api, 
                        openedPopupWithFullSizeImage, 
                        popupConfirmDeletingCard, selectors.template);
                        cardsSection.addElement(createdCard);
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
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

enableButtonOpenPopupEditProfile(buttonEditProfile, currentUserInfo, formFieldName, formFieldJob, popupEditProfile, popupFormButtonSavePlace, validationSettings);

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
<<<<<<< HEAD
    currentUserId = userData._id;

=======
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
    currentUserInfo.setUserInfo(userData);
    currentUserInfo.setUserAvatar(userData);
    
    cardsSection.renderItems(cardsData.reverse());
}).catch(err => console.log(`Ошибка загрузки данных: ${err}`));
