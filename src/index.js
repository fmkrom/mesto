import "./pages/index.css";

//1. Импорт массива карточек:
import {initialCards} from "./scripts/data-arrays/initialCards";

//2. Импорт переменных из файла констант: 
import {
        popupEditProfile,
        formEditProfile,
        popupAddCard,
        buttonAddCard,
        popupFormAddPlace,
        buttonEditProfile,
        popupFullsizeImage,
        formFieldName,
        formFieldJob,
        popupFormButtonSavePlace,
        pageProfileName,
        pageProfileJob
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

import {Api} from "./scripts/components/Api.js";

import {createNewCard}from "./scripts/utils/utils.js";

/*===*/
//Класс контейнера, содержащего карточки:

const openedPopupWithFullSizeImage = new PopupWithFullSizeImage(popupFullsizeImage);

const cardsContainer = new Section(
  {items: initialCards,
  renderer: (item) =>{
        createNewCard(Card, 
                item.name, 
                item.link, 
                openedPopupWithFullSizeImage,
                cardsContainer)}
  }, '.cards');

cardsContainer.renderItems();

const cardsApi = new Api({
        url: "https://mesto.nomoreparties.co/v1/cohort-18/cards",
        headers: {
            Authorization: '6b4f0e7a-6b81-4fab-971b-4da07f00c7c0',
            "content-type": "application/json",
        },
});

cardsApi.getAllCards().then((data) => {
        const NewCardsArray = data.map((item) => ({ name: item.name, link: item.link }));
        console.log(NewCardsArray);
        const serverCardsContainer = new Section(
                {items: NewCardsArray,
                renderer: (item) =>{
                      createNewCard(Card, 
                              item.name, 
                              item.link, 
                              openedPopupWithFullSizeImage,
                              serverCardsContainer)}
                }, '.cards');
serverCardsContainer.renderItems()
}).catch((err) => console.log(err));

//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation(formEditProfile, validationSettings);

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);;
formCardValidator.enableValidation(popupFormAddPlace, validationSettings);

//Класс: создаем новый попап с формой для попапа добавления карточки
const popupAddCardClass = new PopupWithForm({
        popup: popupAddCard,
                handleFormSubmit:(formData) =>{
                const MyCardsForServerContainer = new Section(
                        {items: formData,
                        renderer: (item) =>{
                                createNewCard(Card, 
                                              item.addPlaceName,
                                              item.addPalceUrl,
                                              openedPopupWithFullSizeImage,
                                              MyCardsForServerContainer)}
                        }, '.cards');
        MyCardsForServerContainer.renderItems();
        popupAddCardClass.closePopup();
        }
});

popupAddCardClass.setEventListeners();

buttonAddCard.addEventListener('click', ()=> {
        popupAddCardClass.openPopup();
        popupFormButtonSavePlace.classList.add(validationSettings.inactiveButtonClass);
        popupFormButtonSavePlace.disabled = true;
}); 

//Логика профиля пользователя:
const currentUser = new UserInfo('.profile__name', '.profile__job');

const popupEditProfileClass = new PopupWithForm(
        {popup: popupEditProfile,
           handleFormSubmit:(formData)=>{
                currentUser.setUserInfo(formData.editProfileName,
                                        formData.editProfileJob);
                popupEditProfileClass.closePopup();
           }
        },
);
popupEditProfileClass.setEventListeners();

buttonEditProfile.addEventListener('click', ()=>{
        popupEditProfileClass.openPopup();
        const userData = currentUser.getUserInfo();
        formFieldName.value = userData.userName;
        formFieldJob.value = userData.userJob; 
});

