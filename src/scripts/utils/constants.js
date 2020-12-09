//ПЕРЕМЕННЫЕ

/*--------------------------------------------------------------------------------------------*/
//А. Переменные для функции редактирования профиля

//1. Всплывающее окно редактирования профиля
export const popupEditProfile = document.querySelector('.popup_type-edit-profile');

//2.1.2.Переменная с контентом всплывающего окна (для submit) - в окне редактирования профиля
export const formEditProfile = document.forms.editProfile;

//2.1.3. Поле формы: имя пользователя
export const formFieldName = formEditProfile.editProfileName;

//2.1.4. Поле формы: профессия
export const formFieldJob = formEditProfile.editProfileJob;

//2.3.2.1. Кнопка "Cохранить изменения профиля"
export const buttonSaveProfile = formEditProfile.querySelector('.form__button-save');

/*--------------------------------------------------------------------------------------------*/

//Б. Попап (всплывающее окно) добавления фото
export const popupAddCard = document.querySelector('.popup_type-add-card');

export const popupModeOpened = document.querySelector('.popup_mode-opened');

//2.1.5. Кнопка "Добавить место" на главной странице
export const buttonAddCard = document.querySelector('.profile__add-button');

//2.1.6.Переменная с контентом ФОРМЫ всплывающего окна (для submit) - в окне добавления места
//Новая константа:
export const popupFormAddPlace = document.forms.addPlace;

//2.2. Основные переменные для данных на странице

//2.2.1. Имя пользователя на странице
export const pageProfileName = document.querySelector('.profile__name'); 

//2.2.3. Профессия на странице
export const pageProfileJob = document.querySelector('.profile__job');

export const pageProfileAvatar = document.querySelector('.profile__image');

//2.3.1. Кнопка "редактировать профиль"
export const buttonEditProfile = document.querySelector('.profile__edit-button');

//2.3.2.2.1. Поле формы окна "Добавить место" - название места 
export const formAddPlaceFieldName = popupFormAddPlace.addPlaceName;

//2.3.2.2.2. Поле формы окна "Добавить место" - ссылка на фото места
export const formAddPlaceFieldUrl = popupFormAddPlace.addPlaceUrl;

//Попап редуктирования профиля

//2.3.4. Кнопка "Закрыть профиль без сохранения изменений"
export const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__button-close');

//2.3.5. Кнопка "Закрыть без сохранения изменений" окно добавления фото
export const buttonCloseAddCard = popupAddCard.querySelector('.popup__button-close');

/*==============================================================*/

//ПЕРЕМЕННЫЕ ДЛЯ МАССИВА КАРТОЧЕК

//3.1. Переменные для обращения к массиву карточек и фото

//3.1.1. Секция elements, в котором будут располагаться темплаты
export const cardsNode = document.querySelector('.cards');

//3.2.1. Темплата элемента. Обращаемся к ее содержанию
export const cardTemplate = document.querySelector('.template').content;

//3.1.1. Изображение внутри карточки
export const cardImage = cardTemplate.querySelector('.card__image');

//3.1.2. Аттрибут "Alt" фотографии на странице
export const cardImageAlt = cardTemplate.querySelector('.card__image').alt;

//3.1.3. Переменная для заголовка карточки (для последующей ее перезаписи при помощи textContent)
export const cardTitle = cardTemplate.querySelector('.card__title');

//3.1.3.A. ПЕРЕМЕННЫЕ ДЛЯ ДОБАВЛЕНИЯ ЭЛЕМЕНТОВ В МАССИВ ФОТО

//3.1.3.Б.1. Переменная для value формы добавления фото: название фото
//ВАЖНО! Возможно - переделать ссылки этих констант!
export const formAddPlaceName = document.querySelector('.popup__form-field-place-name');

//3.1.3.Б.2. Переменная для value формы добавления фото: ссылка на страницу
//ВАЖНО! Возможно - переделать ссылки этих констант!
export const formAddPlaceUrl = document.querySelector('.popup__form-field-photo-url');

//3.1.3.Б.3. Переменная для кнопки "сохранить место"
export const popupFormButtonSavePlace = document.forms.addPlace.querySelector('.form__button-save');

//7. Переменные для открытия окна полномасштабного изображения: 

//Само всплывающее окно
export const popupFullsizeImage = document.querySelector('.popup_type-fullsize-image');

//Картинка во всплывающем окне
export const fullsizeImage = document.querySelector('.fullsize-image__image');

//Заголовок всплывающего окна
export const fullsizeImageTitle = document.querySelector('.fullsize-image__title');

export const buttonCloseFullsizeImage = popupFullsizeImage.querySelector('.popup__button-close');

