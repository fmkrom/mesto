import {
popupEditProfile,
formEditProfile,
formFieldName,
formFieldJob,
buttonSaveProfile,
popupAddCard,
popupModeOpened,
buttonAddCard,
popupFormAddPlace,
pageProfileName,
pageProfileJob,
buttonEditProfile,
formAddPlaceFieldName,
formAddPlaceFieldUrl,
buttonCloseEditProfile,
buttonCloseAddCard,
cardsNode,
cardTemplate,
cardImage,
cardImageAlt,
cardTitle,
formAddPlaceName,
formAddPlaceUrl,
popupFormButtonSavePlace,
popupFullsizeImage,
fullsizeImage,
fullsizeImageTitle,
buttonCloseFullsizeImage
} from "./constants.js"

//Импортируем класс карточки
import Card from "./Card.js"

//Импортируем массив данных для карточек
import initialCards from "./initialCards.js"

//Импортируем настройки валидации
import validationSettings from "./validationSettings.js"

//Импортируем валидатор форм
import FormValidator from "./FormValidator.js"

import clearForm from "./utils.js";

/*===*/

//Функция создания класса Карточки (class Card)

function createNewCard(name, link){
    const card = new Card(name, link);
    const cardElement = card.generateCard();
    document.querySelector('.cards').prepend(cardElement);
};

//Функция обработки карточек на основе функции создания новой карточки:
function renderCards(array){
    array.forEach((item)=>{
        createNewCard(item.name, item.link);
    });
};

//Обходим этой функцией массив карточек:
renderCards(initialCards);

//Функция: создает новый валидатор для каждой формы
function validateNewForm(currentForm){
    const formForValidation = new FormValidator(validationSettings, currentForm);
    formForValidation.enableValidation(currentForm, validationSettings);
};

//Применяем эту функцию к формам:
validateNewForm(formEditProfile);
validateNewForm(popupFormAddPlace);




/*-------------------------------------------------------------------------------*/
//Базовая функция открытия и закрытия окон:

//Функция закрытия попапа по ESC
function openPopup(popupName){
    popupName.classList.add('popup_open');
    document.addEventListener('keydown', closePopupByEsc);
};

function closePopup(popupName){
    popupName.classList.remove('popup_open');
    document.removeEventListener('keydown', closePopupByEsc);
};

function closePopupByEsc(event){ 
    const popupOpen = document.querySelector('.popup_open');
    if (event.key === 'Escape'){ 
        closePopup(popupOpen);
    }; 
}; 

export {openPopup, closePopup, closePopupByEsc};

/*-------------------------------------------------------------------------------*/

//Функция: закрыть попап c полномасштабным изображением
buttonCloseFullsizeImage.addEventListener('click', () => { closePopup(popupFullsizeImage) });

/*===*/

//Функция добавить и сохранить место
function addPlace(evt){
    evt.preventDefault()

    //Вызываем в ней функцию создания новой карточки:
    createNewCard(formAddPlaceFieldName.value, formAddPlaceFieldUrl.value);

    formAddPlaceFieldName.value = null;
    formAddPlaceFieldUrl.value = null;
    clearForm(popupFormButtonSavePlace, validationSettings);
    
    closePopup(popupAddCard);
};

popupFormAddPlace.addEventListener('submit', addPlace);

//Функция: открыть окно добавления карточки

buttonAddCard.addEventListener ('click', function(){
    openPopup(popupAddCard);
});

//А. Функции окна "Редактировать профиль"

//5.1. Функция: открыть окно редактирования профиля

function editProfile(){
    openPopup(popupEditProfile);
    
    formFieldName.value = pageProfileName.textContent;
    formFieldJob.value = pageProfileJob.textContent;
};

buttonEditProfile.addEventListener('click', editProfile);

//5.2. Функция: редактировать профиль, сохранить изменения и закрыть окно

function saveProfileChanges(evt){
    evt.preventDefault();
    
    pageProfileName.textContent = formFieldName.value;
    pageProfileJob.textContent = formFieldJob.value;
   
    closePopup(popupEditProfile);
};

formEditProfile.addEventListener('submit', saveProfileChanges);

/*=====*/

//ФУНКЦИИ ЗАКРЫТИЯ МОДАЛЬНЫХ ОКОН

//Закрытие по щелчку на попап

function closePopupWithOverlayClick(popup){
    
    popup.addEventListener('click', function(event){
        if (event.target.classList.contains('popup__overlay') || event.target.classList.contains('popup__button-close')){
        closePopup(popup);
        }
    }); 
};

closePopupWithOverlayClick(popupAddCard); 
closePopupWithOverlayClick(popupEditProfile);
closePopupWithOverlayClick(popupFullsizeImage); 