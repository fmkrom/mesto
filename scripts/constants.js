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

