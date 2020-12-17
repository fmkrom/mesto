import "./pages/index.css";

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
        setUserDataOnPage,
        confirmDeletingCard
}from "./scripts/utils/utils.js";

/*===*/
//Класс контейнера, содержащего карточки:

const openedPopupWithFullSizeImage = new PopupWithFullSizeImage(popupFullsizeImage);

const api = new Api({
        url: "https://mesto.nomoreparties.co/v1/cohort-18/",
        headers: {
            Authorization: '6b4f0e7a-6b81-4fab-971b-4da07f00c7c0',
            "content-type": "application/json; charset=UTF-8",
        },
});

const popupConfirmDeletingCardClass = new PopupWithButton(
        {popup: popupConfirmDeletingCard,
                handleConfirmDeletingCard:(CardClass, currentCard)=>{
                        console.log('This is PopupConfirmDeleting Card', popupConfirmDeletingCard);
                        confirmDeletingCard(CardClass, currentCard);
                }          
});
popupConfirmDeletingCardClass.setEventListeners();

//Асинхрон: получаем карточки с сервера и рендерим их методом класса Section
api.getCardsDataFromServer().then((data) => {
        //console.log('This is data for cards from server:', data, data._id);
        cardsSection.renderItems(data);
}).catch((err) => console.log(err));

//Создаем Section - независимый от всех прочих элементов страницы:
const cardsSection = new Section(
{renderer: (item) =>{
        createNewCard(Card, item, openedPopupWithFullSizeImage,
                cardsSection, popupConfirmDeletingCardClass, api);
        }
}, '.cards');

//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation(formEditProfile, validationSettings);

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);;
formCardValidator.enableValidation(popupFormAddPlace, validationSettings);

//Класс: создаем новый попап с формой для попапа добавления карточки
const popupAddCardClass = new PopupWithForm({
        popup: popupAddCard,
        handleFormSubmit:(formData) =>{
                api.addCardToServer(formData.addPlaceName, formData.addPlaceUrl)
                .then((data)=>{
                console.log('This is data from server in popupAddCardClass', data);
                        createNewCard(Card,  
                                data,
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

//Запрос API для изменения данных пользователя
const popupEditProfileClass = new PopupWithForm(
        {popup: popupEditProfile,
           handleFormSubmit:(formData)=>{
                        console.log('This is formData stage 1 ', formData);
                        api.setUserData(formData.editProfileName, formData.editProfileJob)
                        .then((formData)=>{
                                console.log('This is formData stage 2 ',formData);
                                currentUser.setUserInfo(formData.editProfileName,
                                                        formData.editProfileJob),
                                console.log('This is formData stage 3 from popupEditProfileClass', formData);
                                popupEditProfileClass.closePopup()
                        }).catch((err) => console.log(err));
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


//Вставляю данные пользователя на страницу
api.getUserData().then((data) =>{
        //console.log('This is user data on page', data);
        //console.dir(this);
        setUserDataOnPage(data, 
                          pageProfileName, 
                          pageProfileJob, 
                          pageProfileAvatar);
}).catch((err) => console.log(err));

//ФОРМА РЕДАКТИРОВАНИЯ АВАТАРА:

//Применяем валидатор к форме редактирования аватара: 
const formEditAvatarValidator = new FormValidator(validationSettings, formEditAvatar);;
formEditAvatarValidator.enableValidation(formEditAvatar, validationSettings);

const popupEditAvatarClass = new PopupWithForm({
        popup: popupEditAvatar,
        handleFormSubmit:(avatarUrl)=>{
                        console.log('This is formUrl stage 1 ', avatarUrl);
                        api.editAvatar(avatarUrl)
                        .then((avatarUrl)=>{
                                console.log('This is formUrl stage 2 ',avatarUrl);
                                updateAvatarOnPage(avatarUrl);
                                console.log('This is formURl stage 3 from popupEditAvatarClass', avatarUrl);
                                popupEditAvatarClass.closePopup();
                        })
        }
        
});
popupEditAvatarClass.setEventListeners();

profileEditAvatarLink.addEventListener('click', ()=>{popupEditAvatarClass.openPopup()});