//1. Массив фотографий и названий для карточек

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Мальта',
        link: 'https://images.unsplash.com/photo-1591101955413-2dbb0a4da6df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    
    {
        name: 'Юта',
        link: 'https://images.unsplash.com/photo-1575408264798-b50b252663e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80'
    },

    {
        name: 'Ливерпуль',
        link: 'https://images.unsplash.com/photo-1557925179-4e693c2a484b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80'
    },

    {
        name: 'Москва',
        link: 'https://images.unsplash.com/photo-1559890133-39d1c3021d9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=940&q=80'
    },

];

//ПЕРЕМЕННЫЕ

/*--------------------------------------------------------------------------------------------*/
//А. Переменные для функции редактирования профиля

//1. Всплывающее окно редактирования профиля
const popupEditProfile = document.querySelector('.popup_type_edit-profile');

//2.1.2.Переменная с контентом всплывающего окна (для submit) - в окне редактирования профиля
const formEditProfile = document.querySelector('.form_edit-profile');

//2.1.3. Поле формы: имя пользователя
const formFieldName = formEditProfile.querySelector('.form-field_input_name');

//2.1.4. Поле формы: профессия
const formFieldJob = formEditProfile.querySelector('.form-field_input_job');

//2.3.2.1. Кнопка "Cохранить изменения профиля"
const buttonSaveProfile = formEditProfile.querySelector('.form__button-save');

/*--------------------------------------------------------------------------------------------*/

//Б. Попап (всплывающее окно) добавления фото
const popupAddCard = document.querySelector('.popup_type_add-card');

//2.1.5. Кнопка "Добавить место" на главной странице
const buttonAddCard = document.querySelector('.profile__add-button');

//2.1.6.Переменная с контентом ФОРМЫ всплывающего окна (для submit) - в окне добавления места
const popupFormAddPlace = popupAddCard.querySelector('.form_add-place');


//2.2. Основные переменные для данных на странице

//2.2.1. Имя пользователя на странице
const pageProfileName = document.querySelector('.profile__name'); 

//2.2.2. Имя пользователя по умолчанию
const formNameDefault = pageProfileName.textContent;

//2.2.3. Профессия на странице
const pageProfileJob = document.querySelector('.profile__job');

//2.2.4. Профессия по умолчанию
const formJobDefault = pageProfileJob.textContent;

//2.3.1. Кнопка "редактировать профиль"
const buttonEditProfile = document.querySelector('.profile__edit-button');

//2.3.2.2.1. Поле формы окна "Добавить место" - название места 
const formAddPlaceFieldName = document.querySelector('.form-field_input_place-name');

//2.3.2.2.2. Поле формы окна "Добавить место" - ссылка на фото места
const formAddPlaceFieldUrl = document.querySelector('.form-field_input_image-url');

//Попап редуктирования профиля

//2.3.4. Кнопка "Закрыть профиль без сохранения изменений"
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__button-close');

//2.3.5. Кнопка "Закрыть без сохранения изменений" окно добавления фото
const buttonCloseAddCard = popupAddCard.querySelector('.popup__button-close');

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
const formAddPlaceName = document.querySelector('.popup__form-field-place-name');

//3.1.3.Б.2. Переменная для value формы добавления фото: ссылка на страницу
const formAddPlaceUrl = document.querySelector('.popup__form-field-photo-url');

//3.1.3.Б.3. Переменная для кнопки "сохранить место"
const popupFormButtonSavePlace = document.querySelector('.popup__form-button-save-place');

//7. Переменные для открытия окна полномасштабного изображения: 

//Само всплывающее окно
const popupFullsizeImage = document.querySelector('.popup_type_fullsize-image');

//Картинка во всплывающем окне
const fullsizeImage = document.querySelector('.fullsize-image__image');

//Заголовок всплывающего окна
const fullsizeImageTitle = document.querySelector('.fullsize-image__title');

const buttonCloseFullsizeImage = popupFullsizeImage.querySelector('.popup__button-close');

/*-------------------------------------------------------------------------------*/
//Базовая функция открытия и закрытия окон:

function openPopup(popupName){
    //popupName - здесь будет переменная того попапа, который нужно закрыть
    popupName.classList.remove('popup_mode_closed');
    popupName.classList.add('popup_mode_opened');
};

function closePopup(popupName){
    //popupName - здесь будет переменная того попапа, который нужно закрыть
    popupName.classList.remove('popup_mode_opened');
    popupName.classList.add('popup_mode_closed');
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

//Функция: закрыть попап c полномасштабным изображением
function closeFullSizeImage(){
    closePopup(popupFullsizeImage);
};

buttonCloseFullsizeImage.addEventListener('click', closeFullSizeImage);

//Функция добавления базовых карточек
function getCard(arrayItem){

    //Клонируюем темплату
    const clonedTemplate = cardTemplate.cloneNode(true);
    
    //Внутри темплаты: кнопка удаления карточки:
    const templateDeleteButton = clonedTemplate.querySelector('.card__delete-button');

    //Внутри темплаты: кнопка лайка карточки
    const templateLikeButton = clonedTemplate.querySelector('.card__like-button');

    //Внутри темплаты: переменная для открытия полноэкранного изображения
    const templateImageFullSize = clonedTemplate.querySelector('.card__open-fullsize-image');

    const templateImage = clonedTemplate.querySelector('.card__image');

    //Наполнение темплаты содежимым
    templateImage.src=arrayItem.link;
    clonedTemplate.querySelector('.card__title').textContent=arrayItem.name;
    templateImage.alt=arrayItem.name;

     //Привязываем ее к кнопке "Удалить" функцию удаления карточки
    templateDeleteButton.addEventListener('click', deleteCard);

    //Функция лайка карточки. Привязываем ее к кнопке
    templateLikeButton.addEventListener('click', likeCard);

    //Функция открытия полномасштабного изображения
    templateImageFullSize.addEventListener('click', openFullSizeImage);

    //Возвращаем результат работы функции: клонированная темплата с содержимым:
    return clonedTemplate;
};

//Функция-рендерер
/*ВАЖНО! В ней arrayItem - переменная элементов массива, связывающая воедино две этих функции*/
function renderCards(arrayItem){
    cardsNode.prepend(getCard(arrayItem));
};

//Вызываем функцию-рендерер и применяем к массиву карточек
initialCards.forEach(renderCards);

//Функция: удаление карточки
function deleteCard(event){
    event.target.closest('.card').remove();
};

//Функция: лайкнуть фото
function likeCard(event){
    const eventTarget = event.target;
    eventTarget.classList.toggle('card__like-button');
    eventTarget.classList.toggle('card__like-button_active');
};

//Функция добавить и сохранить место
function addPlace(evt){
    evt.preventDefault()
        
    renderCards({
        name:formAddPlaceFieldName.value, 
        link:formAddPlaceFieldUrl.value,
        alt:formAddPlaceFieldName.value 
    },);

    closePopup(popupAddCard);
};

popupFormAddPlace.addEventListener('submit', addPlace);


//5. Функции всплывающих окон

//А. Функции окна "Редактировать профиль"

//5.1. Функция: открыть окно редактирования профиля

function editProfile(){
    openPopup(popupEditProfile);
    
    formFieldName.value = formNameDefault;
    formFieldJob.value = formJobDefault;
};

buttonEditProfile.addEventListener('click', editProfile);

//5.2. Функция: редактировать профиль, сохранить изменения и закрыть окно

function saveProfileChanges(evt){
    evt.preventDefault();
    
    pageProfileName.textContent = formFieldName.value;
    pageProfileJob.textContent = formFieldJob.value;

    formNameDefault = formFieldName.value;
    formJobDefault = formFieldJob.value;
    
    closePopup(popupEditProfile);
};

formEditProfile.addEventListener('submit', saveProfileChanges);

//5.3. Функция: закрыть окно редактирования профиля и не сохранять изменения

function dismissProfileChanges(){
    
    formFieldName.textContent = pageProfileName;
    formFieldJob.textContent = pageProfileJob;

    closePopup(popupEditProfile);
}

buttonCloseEditProfile.addEventListener ('click', dismissProfileChanges);

//Б. Функции окна "Добавить новую карточку"

//5.1.1. Функция: открыть окно добавления карточки
function openPopupAddCard(){
    openPopup(popupAddCard);
};

//5.1.2. Привязываем эту функцию к кнопке "добавить" в окне добавления карточки
buttonAddCard.addEventListener('click', openPopupAddCard);

//5.2.1. Функция - закрыть окно добавления карточки
function closePopupAddCard(){
    //Функция: закрыть окно добавления карточки и не сохранять изменения
    closePopup(popupAddCard);
}

//5.2.2. Привязываем эту функцию к кнопке "закрыть" в окне добавления карточки
buttonCloseAddCard.addEventListener ('click', closePopupAddCard);

