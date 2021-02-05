//import "./pages/index.css";

//2. Импорт переменных из файла констант: 
import {
        //popupEditProfile,
        formEditProfile,
        //popupAddCard,
        buttonAddCard,
        popupFormAddPlace,
        popupFullsizeImage,
        popupFormButtonSavePlace,
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

const api = new Api(apiSettings);

const currentUserInfo = new UserInfo(selectors);

const openedPopupWithFullSizeImage = new PopupWithFullSizeImage(selectors.popupFullSizeImage);

const popupConfirmDeletingCard = new PopupWithButton(
        {popupSelector: selectors.popupDeleteCardSelector,
         handleConfirmDeletingCard:()=>{}
});
popupConfirmDeletingCard.setEventListeners();

//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation(formEditProfile, validationSettings);

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);;
formCardValidator.enableValidation(popupFormAddPlace, validationSettings);

const createCard = (data) => {
        const card = new Card({
          data: { ...data, currentUserId: userId},
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
                popupConfirmDeletingCard.handleConfirmDeletingCard(()=>{ //Важно! Искать: здесь где-то ошибка синтаксиса!!
                        popupConfirmDeletingCard.changeButtonText(true);
                        api.deleteCard(data._id)
                        .then(()=> {card.deleteCurrentCard();
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
            .finally(() => changeButtonText(false));
            popupAddCard.closePopup();
        }
});
popupAddCard.setEventListeners();

buttonAddCard.addEventListener('click', ()=> {
        console.log('function works!!', buttonAddCard);
        popupAddCard.openPopup();
        popupFormButtonSavePlace.classList.add(validationSettings.inactiveButtonClass);
        popupFormButtonSavePlace.disabled = true;
}); 

const cardsSection = new Section({
   renderer: (data) => {cardsSection.addElement(createCard(data))}
   }, selectors.cardsContainer
);

const popupEditProfile = new PopupWithForm(
        {popupSelector: selectors.popupEditProfileSelector,
         handleFormSubmit:(formData)=>{
             popupEditProfile.changeButtonText(true);
             api.setUser({
                name: formData.editProfileName,
                info: formData.editProfileJob
             })                    
              .then((data)=>{
                currentUserInfo.setUserInfo({
                   name: data.name,
                   about: data.about
                })
                popupEditProfile.closePopup();
            }).catch((err) => console.log(`Ошибка при обновлении данных пользователя: ${err}`)
            ).finally(() => changeButtonText(false));
        }
});
popupEditProfile.setEventListeners();

Promise.all([api.getCards(), api.getUser()])
  .then(([cardsData, userData]) => {
    userId = userData._id;

    currentUserInfo.setUserInfo(userData.name, userData.about);
    currentUserInfo.setUserAvatar(userData.avatar);
    cardsSection.renderItems(cardsData);
}).catch(err => console.log(`Ошибка загрузки данных: ${err}`));


/*Далее старый код*/

//Создаем Section - независимый от всех прочих элементов страницы:
/*const cardsSection = new Section(
{renderer: (item) =>{
        createNewCard(Card, item, openedPopupWithFullSizeImage,
                cardsSection, popupConfirmDeletingCardClass, api);
        }
}, '.cards');*/



//Применяем класс валидатора к каждой из форм:
//const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
//formProfileValidator.enableValidation(formEditProfile, validationSettings);

//const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);;
//formCardValidator.enableValidation(popupFormAddPlace, validationSettings);

//Класс: создаем новый попап с формой для попапа добавления карточки
/*const popupAddCardClass = new PopupWithForm({
        popup: popupAddCard,
        handleFormSubmit:(formData) =>{
                changeSaveButtonText(popupAddCard);
                api.addCardToServer(formData.addPlaceName, formData.addPlaceUrl)
                .then((data)=>{
                //console.log('This is data from server in popupAddCardClass', data);
                //console.log('This is user that created this card:', data.owner._id);
                        createNewCard(Card,  
                                data,
                                openedPopupWithFullSizeImage,  
                                cardsSection,
                                popupConfirmDeletingCardClass, api);
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
                        changeSaveButtonText(popupEditProfile);
                        //console.log('This is formData stage 1 ', formData);
                        api.setUserData(formData.editProfileName, formData.editProfileJob)
                        .then((formData)=>{
                                //console.log('This is formData stage 2 ',formData);
                                currentUser.setUserInfo(formData.editProfileName,
                                                        formData.editProfileJob),
                                //console.log('This is formData stage 3 from popupEditProfileClass', formData);
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

/*
api.getUserData().then((data) =>{
        console.log(data.)
}).catch((err) => console.log(err));
*/

//ФОРМА РЕДАКТИРОВАНИЯ АВАТАРА:

//Применяем валидатор к форме редактирования аватара: 
/*const formEditAvatarValidator = new FormValidator(validationSettings, formEditAvatar);;
formEditAvatarValidator.enableValidation(formEditAvatar, validationSettings);

const popupEditAvatarClass = new PopupWithForm({
        popup: popupEditAvatar,
        handleFormSubmit:(avatarUrl)=>{
                        changeSaveButtonText(popupEditAvatar);
                        console.dir('This is formUrl stage 1 ', avatarUrl);
                        console.log('This is formUrl stage 1 ', avatarUrl);
                        patchApi.newAvatar(avatarUrl)
                        .then((data)=>{
                                console.dir('This is formUrl stage 2 ',data);
                                updateAvatarOnPage(data);
                                //console.log('This is formURl stage 3 from popupEditAvatarClass', avatarUrl);
                                popupEditAvatarClass.closePopup();
                        })
        }
        
});
popupEditAvatarClass.setEventListeners();

profileEditAvatarLink.addEventListener('click', ()=>{popupEditAvatarClass.openPopup()});*/