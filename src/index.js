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
        popupEditAvatar,
        buttonConfirmDeletingCard,
        formEditAvatar,
        profileEditAvatarLink
} from "./scripts/utils/constants.js";

import {Section} from "./scripts/components/Section.js";

import {Card} from "./scripts/components/Card.js";

//3. Импорт класса валидатора:
import {FormValidator} from "./scripts/components/FormValidator.js";

//3.2. Импорт классов модальных окон:
import {PopupWithFullSizeImage} from "./scripts/components/PopupWithFullSizeImage.js";
import {PopupWithForm} from "./scripts/components/PopupWithForm.js";
import {PopupWithButton} from "./scripts/components/PopupWithButton.js";

//5. Импорт настроек валидации:
import {validationSettings} from "./scripts/settings/validationSettings.js";

import {UserInfo} from "./scripts/components/UserInfo.js";

import {Api} from "./scripts/components/Api.js";

import {createNewCard,
        createNewSection,
        setUserDataOnPage,
        confirmDeletingCard
}from "./scripts/utils/utils.js";

/*===*/
//Класс контейнера, содержащего карточки:

const openedPopupWithFullSizeImage = new PopupWithFullSizeImage(popupFullsizeImage);

//Создаем Section - независимый от всех прочих элементов страницы:
const cardsSection = new Section(
{renderer: (item) =>{
        createNewCard(Card, item.name, item.link, item.likes, 
                openedPopupWithFullSizeImage,
                cardsSection, popupConfirmDeletingCardClass
                )}
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
        console.log(data);
        cardsSection.renderItems(data);
        //console.log(data);
}).catch((err) => console.log(err));

//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation(formEditProfile, validationSettings);

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);;
formCardValidator.enableValidation(popupFormAddPlace, validationSettings);

//Api для загрузки новых карточек на сервер
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
                postCardApi
                .addCardToServer(formData.addPlaceName, formData.addPlaceUrl)
                .then((formData)=>{
                //console.log('This is data from server in popupAddCardClass', formData);
                        createNewCard(Card,  
                                formData.addPlaceName, 
                                formData.addPlaceUrl,
                                0,
                                openedPopupWithFullSizeImage,  
                                cardsSection,
                                popupConfirmDeletingCardClass);
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

//Логика профиля пользователя:
const currentUser = new UserInfo('.profile__name', '.profile__job');

const editUserApi = new Api({
        url: 'https://mesto.nomoreparties.co/v1/cohort-18/users/me',
        Authorization: '6b4f0e7a-6b81-4fab-971b-4da07f00c7c0',
        "content-type": "application/json",
});

//Запрос API для изменения данных пользователя
const popupEditProfileClass = new PopupWithForm(
        {popup: popupEditProfile,
           handleFormSubmit:(formData)=>{
                        console.log('This is formData stage 1 ', formData);
                        editUserApi.setUserData(formData.editProfileName, formData.editProfileJob)
                        .then((formData)=>{
                                console.log('This is formData stage 2 ',formData);
                                currentUser.setUserInfo(formData.editProfileName,
                                                        formData.editProfileJob),
                                console.log('This is formData stage 3 from popupEditProfileClass', formData);
                                popupEditProfileClass.closePopup()
                        })
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
        //console.log('This is user data on page', data);
        //console.dir(this);
        setUserDataOnPage(data, 
                          pageProfileName, 
                          pageProfileJob, 
                          pageProfileAvatar);
}).catch((err) => console.log(err));


//Попап: подтвердить удаление карточки
const popupConfirmDeletingCardClass = new PopupWithButton({
        popup: popupConfirmDeletingCard})
        //handleFormSubmit:(deleteButton, confirmButton, Card) =>{
                      
        //popupConfirmDeletingCardClass.closePopup();
        
//});
popupConfirmDeletingCardClass.setEventListeners();

//ФОРМА РЕДАКТИРОВАНИЯ АВАТАРА:

//Применяем валидатор к форме редактирования аватара: 
const formEditAvatarValidator = new FormValidator(validationSettings, formEditAvatar);;
formEditAvatarValidator.enableValidation(formEditAvatar, validationSettings);

//Запрос на сервер:
const editAvatarApi = new Api({
        url: "https://mesto.nomoreparties.co/v1/cohort-18/users/me/avatar",
        Authorization: "6b4f0e7a-6b81-4fab-971b-4da07f00c7c0",
        "content-type": "application/json",
});

const popupEditAvatarClass = new PopupWithForm({
        popup: popupEditAvatar,
        handleFormSubmit: (formUrl)=>{
                        console.log('This is formUrl stage 1 ', formUrl);
                        editAvatarApi.editAvatar(formUrl)
                        .then((formUrl)=>{
                                console.log('This is formUrl stage 2 ',formUrl);
                                updateAvatarOnPage(formUrl);
                                console.log('This is formURl stage 3 from popupEditAvatarClass', formUrl);
                                popupEditAvatarClass.closePopup();
                        })
        }
        
});
popupEditAvatarClass.setEventListeners();

profileEditAvatarLink.addEventListener('click', ()=>{popupEditAvatarClass.openPopup()});