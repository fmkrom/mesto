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
        pageProfileAvatar,
        popupConfirmDeletingCard,
        popupEditAvatar
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

import {createNewCard,
        createNewSection,
        setUserDataOnPage
}from "./scripts/utils/utils.js";

/*===*/
//Класс контейнера, содержащего карточки:

const openedPopupWithFullSizeImage = new PopupWithFullSizeImage(popupFullsizeImage);

//Создаем Section - независимый от всех прочих элементов страницы:
const cardsSection = new Section(
{renderer: (item) =>{
        createNewCard(Card, 
                item.name, 
                item.link, 
                openedPopupWithFullSizeImage,
                cardsSection)}
}, '.cards');

//Запрос из сервера на массив карточек:
const cardsApi = new Api({
        url: "https://mesto.nomoreparties.co/v1/cohort-18/cards",
        headers: {
            Authorization: '6b4f0e7a-6b81-4fab-971b-4da07f00c7c0',
            "content-type": "application/json",
        },
});

//Асинхрон: получаем карточки с сервера и рендерим их методом класса Section
cardsApi.getCardsFromServer().then((data) => {
        cardsSection.renderItems(data);
}).catch((err) => console.log(err));

//Рендерим этим же методом мой изначальный массив карточек:
//cardsSection.renderItems(initialCards);

//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation(formEditProfile, validationSettings);

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);;
formCardValidator.enableValidation(popupFormAddPlace, validationSettings);

const postCardApi = new Api ({
        url: "https://mesto.nomoreparties.co/v1/cohort-18/cards",
        headers: {
            Authorization: '6b4f0e7a-6b81-4fab-971b-4da07f00c7c0',
            "content-type": "application/json",
        },
});

//Класс: создаем новый попап с формой для попапа добавления карточки
const popupAddCardClass = new PopupWithForm({
        popup: popupAddCard,
        handleFormSubmit:(formData) =>{
                postCardApi.addCardToServer(
                        formData.editProfileJob,
                        formData.editProfileJob).then((res)=>{
                        createNewCard(Card,  
                                res.name, 
                                res.link,
                                openedPopupWithFullSizeImage,  
                                cardsSection);
                }).catch((err) => console.log(err));
        popupAddCardClass.closePopup();
        }
});
popupAddCardClass.setEventListeners();

buttonAddCard.addEventListener('click', ()=> {
        popupAddCardClass.openPopup();
        popupFormButtonSavePlace.classList.add(validationSettings.inactiveButtonClass);
        popupFormButtonSavePlace.disabled = true;
}); 
/*
const popupEditAvatarClass = new PopupWithForm({
       popup: popupEditAvatar,
       handleFormSubmit:()=>{
         console.log('popupEditAvatar');
         popupEditAvatarClass.closePopup();
        }, 
});
popupEditAvatarClass.setEventListeners();
*/
/*pageProfileAvatar.addEventListener('click', ()=> {
        popupEditAvatarClass.openPopup();
        console.log(popupEditAvatarClass);
});*/

//Логика профиля пользователя:
const currentUser = new UserInfo('.profile__name', '.profile__job');

const popupEditProfileClass = new PopupWithForm(
        {popup: popupEditProfile,
           handleFormSubmit:(formData)=>{
                currentUser.setUserInfo(formData.editProfileName,
                                        formData.editProfileJob);
                //setUserApi.setUserData(formData);
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

const userApi = new Api({
        url: "https://mesto.nomoreparties.co/v1/cohort-18/users/me",
        headers: {
             Authorization: '6b4f0e7a-6b81-4fab-971b-4da07f00c7c0',
             "content-type": "application/json",
        },
});

//Вставляю данные пользователя на страницу
userApi.getUserData().then((data) => {
        //console.log(data);
        setUserDataOnPage(data, 
                          pageProfileName, 
                          pageProfileJob, 
                          pageProfileAvatar);
}).catch((err) => console.log(err));


/*
const setUserApi = new Api({
        url: 'https://mesto.nomoreparties.co/v1/cohort-18/users/me',
        Authorization: '6b4f0e7a-6b81-4fab-971b-4da07f00c7c0',
        "content-type": "application/json",
});*/


