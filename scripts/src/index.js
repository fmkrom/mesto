//1. Импорт массива карточек:
import {initialCards} from "../data-arrays/initialCards.js"

//2. Импорт переменных из файла констант: 
import {
        popupEditProfile,
        formEditProfile,
        formFieldName,
        formFieldJob,
        popupAddCard,
        buttonAddCard,
        popupFormAddPlace,
        buttonEditProfile,
        popupFullsizeImage,
        buttonCloseFullsizeImage,
        popupFormButtonSavePlace,
        
        formAddPlaceFieldName,
        formAddPlaceFieldUrl,
        buttonCloseAddCard,
        buttonCloseEditProfile,
        cardsNode,
        pageProfileName,
        pageProfileJob
} from "../utils/constants.js"

import {selectors} from "../settings/selectors.js"

import {Section} from "../components/Section.js"

import {Card} from "../components/Card.js"

//3. Импорт класса валидатора:
import {FormValidator} from "../components/FormValidator.js";

//3.2. Импорт классов модальных окон:
import {PopupWithFullSizeImage} from "../components/PopupWithFullSizeImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js"

//5. Импорт настроек валидации:
import {validationSettings} from "../settings/validationSettings.js";

import {UserInfo} from "../components/UserInfo.js";

/*===*/
//Класс контейнера, содержащего карточки:

const cardsContainer = new Section(
  {items: initialCards,
  renderer: (item) =>{
    const card = new Card({
        name: item.name,
        link: item.link,
        handleCardClick: ()=>{
                const openedPopupWithFullSizeImage = new PopupWithFullSizeImage(popupFullsizeImage);
                openedPopupWithFullSizeImage.openFullSizeImage(item.name, item.link);
        }
    });
     const cardElement = card.generateCard();
     cardsContainer.addItem(cardElement);
 }
}, '.cards');

cardsContainer.renderItems();

//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation(formEditProfile, validationSettings);

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);;
formCardValidator.enableValidation(popupFormAddPlace, validationSettings);

//Классы попапов:
const popupEditProfileClass = new PopupWithForm(
        {popup: popupEditProfile,
        handleFormSubmit:(formData)=>{
           const editUserInfo = new UserInfo(formData.editProfileName, formData.editProfileJob);
           editUserInfo.setUserInfo();
           popupEditProfileClass.closePopup();
        }
});
popupEditProfileClass.setEventListeners(buttonEditProfile, buttonCloseEditProfile);

//Класс: создаем новый попап с формой для попапа добавления карточки
const popupAddCardClass = new PopupWithForm({
        popup: popupAddCard,
        handleFormSubmit:(formData) =>{
            const card = new Card({
                    name: formData.addPlaceName, 
                    link: formData.addPlaceUrl,
                        handleCardClick: ()=>{
                          const openedPopupWithFullSizeImage = new PopupWithFullSizeImage(popupFullsizeImage);
                          openedPopupWithFullSizeImage.openFullSizeImage(formData.addPlaceName, formData.addPlaceUrl);
                        }
                });
            const cardElement = card.generateCard();
            cardsContainer.addItem(cardElement);
            popupAddCardClass.closePopup();
        }
});
popupAddCardClass.setEventListeners(buttonAddCard, buttonCloseAddCard);