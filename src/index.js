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
        pageProfileJob,
        pageProfileAvatar
} from "./scripts/utils/constants.js";

import {Section} from "./scripts/components/Section.js";

import {Card} from "./scripts/components/Card.js";

//3. Импорт класса валидатора:
import {FormValidator} from "./scripts/components/FormValidator.js";

//3.2. Импорт классов модальных окон:
import {PopupWithFullSizeImage} from "./scripts/components/PopupWithFullSizeImage.js";
import {PopupWithForm} from "./scripts/components/PopupWithForm.js";

//3.3. Импорт класса API:
import {Api} from "./scripts/components/Api.js";

//5. Импорт настроек валидации:
import {validationSettings} from "./scripts/settings/validationSettings.js";

import {UserInfo} from "./scripts/components/UserInfo.js";

import {createNewCard,
        setUserDataOnPage
}from "./scripts/utils/utils.js";

/*===*/
//Добавляю в контейнер свой изначальный массив карточек:
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

//Запрос на сервер: карточки
const cardsApi = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-18/cards",
    headers: {
        Authorization: '6b4f0e7a-6b81-4fab-971b-4da07f00c7c0',
        "content-type": "application/json",
    },
});

//Загружаю с сервера карточки и добавляю в контейнер
cardsApi.getAllCards().then((data) => {
  const NewCardsArray = data.map((item) => ({ name: item.name, link: item.link }));
  const serverCardsContainer = new Section(
        {items: NewCardsArray,
        renderer: (item) =>{
              createNewCard(Card, 
                      item.name, 
                      item.link, 
                      PopupWithFullSizeImage, 
                      popupFullsizeImage,
                      cardsContainer)}
        }, '.cards');
        serverCardsContainer.renderItems();
}).catch((err) => console.log(err));

//Запрос на сервер: данные пользователя
const userApi = new Api({
   url: "https://mesto.nomoreparties.co/v1/cohort-18/users/me",
   headers: {
        Authorization: '6b4f0e7a-6b81-4fab-971b-4da07f00c7c0',
        "content-type": "application/json",
   },
});

//Вставляю данные пользователя на страницу
userApi.getUserData().then((data) => {
   setUserDataOnPage(data, 
                     pageProfileName, 
                     pageProfileJob, 
                     pageProfileAvatar);
}).catch((err) => console.log(err));

/*
pageProfileName.textContent = data.name; 
    pageProfileJob.textContent = data.about;
    pageProfileAvatar.src = data.avatar;
*/


//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation(formEditProfile, validationSettings);

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);;
formCardValidator.enableValidation(popupFormAddPlace, validationSettings);

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
popupAddCardClass.setEventListeners();

buttonAddCard.addEventListener('click', ()=> {
        popupAddCardClass.openPopup();
        popupFormButtonSavePlace.classList.add(validationSettings.inactiveButtonClass);
        popupFormButtonSavePlace.disabled = true;
}); 

//Логика профиля пользователя:
//const currentUser = new UserInfo('.profile__name', '.profile__job');

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
/*
buttonEditProfile.addEventListener('click', ()=>{
        popupEditProfileClass.openPopup();
        formFieldName.value = pageProfileName.textContent;
        formFieldJob.value = pageProfileJob.textContent;
});*/

