//Импортируем класс карточки
import Card from "./Card.js"

//Импортируем массив данных для карточек
import initialCards from "./initialCards.js"

//Импортируем настройки валидации
import validationSettings from "./validationSettings.js"

//Импортируем валидатор форм
import FormValidator from "./FormValidator.js"

/*===*/

//Функция создания класса Карточки (class Card)
initialCards.forEach((item) => {
    const card = new Card(item.name, item.link);
    const cardElement = card.generateCard();
    document.querySelector('.cards').prepend(cardElement);
});

/*===*/

//Массив их всех форм документа:
const formsList = Array.from(document.querySelectorAll('.form'));

//Для каждого из элементов массива создаем FormValidator
formsList.forEach((item) =>{
    const formForValidation = new FormValidator(validationSettings, item);
    formForValidation.enableValidation(item, validationSettings);
});




//ПЕРЕМЕННЫЕ

/*--------------------------------------------------------------------------------------------*/
//А. Переменные для функции редактирования профиля

//1. Всплывающее окно редактирования профиля
const popupEditProfile = document.querySelector('.popup_type-edit-profile');

//2.1.2.Переменная с контентом всплывающего окна (для submit) - в окне редактирования профиля
const formEditProfile = document.forms.editProfile;

//2.1.3. Поле формы: имя пользователя
const formFieldName = formEditProfile.editProfileName;

//2.1.4. Поле формы: профессия
const formFieldJob = formEditProfile.editProfileJob;

//2.3.2.1. Кнопка "Cохранить изменения профиля"
//const buttonSaveProfile = formEditProfile.querySelector('.form__button-save');

/*--------------------------------------------------------------------------------------------*/

//Б. Попап (всплывающее окно) добавления фото
const popupAddCard = document.querySelector('.popup_type-add-card');

//const popupModeOpened = document.querySelector('.popup_mode-opened');

//2.1.5. Кнопка "Добавить место" на главной странице
const buttonAddCard = document.querySelector('.profile__add-button');

//2.1.6.Переменная с контентом ФОРМЫ всплывающего окна (для submit) - в окне добавления места
//Новая константа:
const popupFormAddPlace = document.forms.addPlace;

//2.2. Основные переменные для данных на странице

//2.2.1. Имя пользователя на странице
const pageProfileName = document.querySelector('.profile__name'); 

//2.2.3. Профессия на странице
const pageProfileJob = document.querySelector('.profile__job');

//2.3.1. Кнопка "редактировать профиль"
const buttonEditProfile = document.querySelector('.profile__edit-button');

//2.3.2.2.1. Поле формы окна "Добавить место" - название места 
const formAddPlaceFieldName = popupFormAddPlace.addPlaceName;

//2.3.2.2.2. Поле формы окна "Добавить место" - ссылка на фото места
const formAddPlaceFieldUrl = popupFormAddPlace.addPlaceUrl;

//Попап редуктирования профиля

//2.3.4. Кнопка "Закрыть профиль без сохранения изменений"
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__button-close');

//2.3.5. Кнопка "Закрыть без сохранения изменений" окно добавления фото
const buttonCloseAddCard = popupAddCard.querySelector('.popup__button-close');

/*==============================================================*/

//ПЕРЕМЕННЫЕ ДЛЯ МАССИВА КАРТОЧЕК

//3.1. Переменные для обращения к массиву карточек и фото

//3.1.1. Секция elements, в котором будут располагаться темплаты
const cardsNode = document.querySelector('.cards');

//3.2.1. Темплата элемента. Обращаемся к ее содержанию
const cardTemplate = document.querySelector('.template').content;

//3.1.1. Изображение внутри карточки
const cardImage = cardTemplate.querySelector('.card__image');

//3.1.2. Аттрибут "Alt" фотографии на странице
const cardImageAlt = cardTemplate.querySelector('.card__image').alt;

//3.1.3. Переменная для заголовка карточки (для последующей ее перезаписи при помощи textContent)
const cardTitle = cardTemplate.querySelector('.card__title');

//3.1.3.A. ПЕРЕМЕННЫЕ ДЛЯ ДОБАВЛЕНИЯ ЭЛЕМЕНТОВ В МАССИВ ФОТО

//3.1.3.Б.1. Переменная для value формы добавления фото: название фото
//ВАЖНО! Возможно - переделать ссылки этих констант!
const formAddPlaceName = document.querySelector('.popup__form-field-place-name');

//3.1.3.Б.2. Переменная для value формы добавления фото: ссылка на страницу
//ВАЖНО! Возможно - переделать ссылки этих констант!
const formAddPlaceUrl = document.querySelector('.popup__form-field-photo-url');

//3.1.3.Б.3. Переменная для кнопки "сохранить место"
const popupFormButtonSavePlace = document.querySelector('.popup__form-button-save-place');

//7. Переменные для открытия окна полномасштабного изображения: 

//Само всплывающее окно
const popupFullsizeImage = document.querySelector('.popup_type-fullsize-image');

//Картинка во всплывающем окне
const fullsizeImage = document.querySelector('.fullsize-image__image');

//Заголовок всплывающего окна
const fullsizeImageTitle = document.querySelector('.fullsize-image__title');

const buttonCloseFullsizeImage = popupFullsizeImage.querySelector('.popup__button-close');


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

/*-------------------------------------------------------------------------------*/

//Функция: открыть попап с полномасштабным фото
// Для начала пропишем открытие самого попапа

/*Функция: открыть попап с полномасштабным изображением*/

function openFullSizeImage(event){
    openPopup(popupFullsizeImage);
    
    /*Добавляем указатель события*/
    const eventTarget = event.target;
    
    const openedFullsizeImage = eventTarget.src;
        
    fullsizeImage.setAttribute('src', openedFullsizeImage);
    
    /*Вторая часть функии: добавляет к полноэкранному изображению название карточки*/

    //Выбираем ближайшую к цели события карточку
    const cardElement = eventTarget.closest('.card__rectangle');

    //В пределах этой карточки выбираем класс с названием карточки
    const openedFullsizeImageTitle = cardElement.querySelector('.card__title').textContent;
    
    //Ставим ее текст в соотв. поле высплывающего окна
    fullsizeImageTitle.textContent = (openedFullsizeImageTitle);
    
    //Добавляем картинке "alt": он дублирует название карточки
    fullsizeImageTitle.setAttribute('alt', openedFullsizeImageTitle);
};

export {openFullSizeImage};



//Функция: закрыть попап c полномасштабным изображением
function closeFullSizeImage(){
    closePopup(popupFullsizeImage);
};

buttonCloseFullsizeImage.addEventListener('click', closeFullSizeImage);

/*===*/

//Функция добавить и сохранить место
function addPlace(evt){
    evt.preventDefault()
    
    const newCard = new Card(formAddPlaceFieldName.value, formAddPlaceFieldUrl.value);
    const newCardElement = newCard.generateCard();
    document.querySelector('.cards').prepend(newCardElement);

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