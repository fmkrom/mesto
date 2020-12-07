import "./pages/index.css";

//1. Импорт массива карточек:
import {initialCards} from "./scripts/data-arrays/initialCards";

//2. Импорт переменных из файла констант: 
import {
        buttonSaveProfile,
        popupEditProfile,
        formEditProfile,
        popupAddCard,
        buttonAddCard,
        popupFormAddPlace,
        buttonEditProfile,
        popupFullsizeImage,
        popupFormButtonSavePlace,
        popopupAddCardClass,
        buttonCloseAddCard,
        buttonCloseEditProfile,
} from "./scripts/utils/constants.js";

import {Section} from "./scripts/components/Section.js";

import {Card} from "./scripts/components/Card.js";

//3. Импорт класса валидатора:
import {FormValidator} from "./scripts/components/FormValidator.js";

//3.2. Импорт классов модальных окон:
import {PopupWithFullSizeImage} from "./scripts/components/PopupWithFullSizeImage.js";
import {PopupWithForm} from "./scripts/components/PopupWithForm.js";

//5. Импорт настроек валидации:
import {validationSettings} from "./scripts/settings/validationSettings.js";

import {UserInfo} from "./scripts/components/UserInfo.js";

import {setButtonListeners,
        createNewCard,
        editUserProfile} from "./scripts/utils/utils.js";

/*===*/
//Класс контейнера, содержащего карточки:

const cardsContainer = new Section(
  {items: initialCards,
  renderer: (item) =>{
        createNewCard(Card, 
                item.name, 
                item.link, 
                PopupWithFullSizeImage, 
                popupFullsizeImage,
                cardsContainer)}
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
           editUserProfile(popupEditProfileClass, UserInfo, formData.name, formData.job);
        }
});

setButtonListeners(buttonEditProfile, buttonSaveProfile, popupEditProfileClass);

//Класс: создаем новый попап с формой для попапа добавления карточки
const popupAddCardClass = new PopupWithForm({
        popup: popupAddCard,
        handleFormSubmit:(formData) =>{
                createNewCard(Card, 
                        formData.addPlaceName,
                        formData.addPlaceUrl,
                        PopupWithFullSizeImage, 
                        popupFullsizeImage,
                        cardsContainer);
            popupAddCardClass.closePopup();
        }
});

setButtonListeners(buttonAddCard, popupFormButtonSavePlace, popupAddCardClass);
