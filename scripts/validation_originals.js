//Переменные и функции валидации форм

//ПЕРЕМЕННЫЕ

/*--------------------------------------------------------------------------------------------*/
//А. Переменные для функции редактирования профиля

//1. Всплывающее окно редактирования профиля
const popupEditProfile = document.querySelector('.popup_type_edit-profile');

//2.1.2.Переменная с контентом всплывающего окна (для submit) - в окне редактирования профиля
const formEditProfile = document.forms.editProfile;

//2.1.3. Поле формы: имя пользователя
const formFieldName = formEditProfile.editProfileName;

//2.1.4. Поле формы: профессия
const formFieldJob = formEditProfile.editProfileJob;

//2.3.2.1. Кнопка "Cохранить изменения профиля"
const buttonSaveProfile = formEditProfile.querySelector('.form__button-save');

/*--------------------------------------------------------------------------------------------*/

//Б. Попап (всплывающее окно) добавления фото
const popupAddCard = document.querySelector('.popup_type_add-card');

//2.1.5. Кнопка "Добавить место" на главной странице
const buttonAddCard = document.querySelector('.profile__add-button');

//2.1.6.Переменная с контентом ФОРМЫ всплывающего окна (для submit) - в окне добавления места
//Новая константа:
const popupFormAddPlace = document.forms.addPlace;

//2.2. Основные переменные для данных на странице

//2.2.1. Имя пользователя на странице
const pageProfileName = document.querySelector('.profile__name'); 

//2.2.2. Имя пользователя по умолчанию
let formNameDefault = pageProfileName.textContent;

//2.2.3. Профессия на странице
const pageProfileJob = document.querySelector('.profile__job');

//2.2.4. Профессия по умолчанию
let formJobDefault = pageProfileJob.textContent;

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

/*============================================================================*/

//Оверлеи - для закрытия попапов щелчком мыши и ESC

//Оверлей попапа добавления карточки
const overlayPopupAddCard = popupAddCard.querySelector('.popup__overlay');

//Оверлей попапа редактирования профиля
const overlayPopupEditProfile = popupEditProfile.querySelector('.popup__overlay');

//Оверлей попапа полномасштабного изображения
const overlayPopupFullsizeImage = popupFullsizeImage.querySelector('.popup__overlay');

/*-------------------------------------------------------------*/
//ФУНКЦИИ ЗАКРЫТИЯ ПОПАПОВ ПО ЩЕЛЧКУ И ПО ESCAPE

/*ВАЖНО! Здесь проблема: окно редактирования - дочерний элемент попапа.
Если и по нему кликнуть - попап закрывается!
*/

//Функция закрытия попапа добавления карточки по щелчку мыши
overlayPopupAddCard.addEventListener('click', function(event){
    if (event.target.classList.contains('popup__overlay')){
        closePopup(popupAddCard);
    }
});

//Функция закрытия попапа редактирования профиля
overlayPopupEditProfile.addEventListener('click', function(event){
    if (event.target.classList.contains('popup__overlay')){
        closePopup(popupEditProfile);
    }
});

//Функция закрытия попапа полноэкранного изображения по щелчку мыши
    overlayPopupFullsizeImage.addEventListener('click', function(event){
    if (event.target.classList.contains('popup__overlay')){
        closePopup(popupFullsizeImage);
    }
});



//Функция закрытия попапа редактирования профиля по щелчку мыши

//Функция закрытия попапа редактирования профиля по щелчку мыши

/*-------------------------------------------------------------*/
//Функция закрытия попапа добавления карточки по ESC

//Функция закрытия попапа редактирования профиля по ESC

//Функция закрытия полномасштабного изображения профиля по ESC


function escapeClose(evt){
    if (evt.key === 'Escape'){
        closePopup(popupAddCard);
        closePopup(popupEditProfile);
        closePopup(popupFullsizeImage);
    }
};

document.addEventListener('keydown', escapeClose);





/*=====================================================================================*/
//ФУНКЦИИ ВАЛИДАЦИИ ФОРМ
/*=====================================================================================*/
/*===============================================================================*/
//КОНСТАНТЫ ОШИБОК

//Ошибки форм

//А. Ошибки формы добавления карточки:

//Ошибка ФДК-имя: Введите имя
const inputAddPlaceNameErrorName = popupFormAddPlace.querySelector(`#${formAddPlaceFieldName.id}-error-name`);

//Ошибка ФДК-имя: заполните оба поля
const inputAddPlaceNameErrorRequired = popupFormAddPlace.querySelector(`#${formAddPlaceFieldName.id}-error-required`);

//Ошибка ФДК-ссылка: Введите ссылку
const inputAddPlaceUrlErrorUrl = popupFormAddPlace.querySelector(`#${formAddPlaceFieldUrl.id}-error-url`);

//Ошибка ФДК-ссылка: Заполните оба поля
const inputAddPlaceUrlErrorRequired = popupFormAddPlace.querySelector(`#${formAddPlaceFieldUrl.id}-error-required`);

/*------------------------------------------------------------------------------------*/

//А. Ошибки формы редактирования профиля:

//Ошибка поля ФРП имя: имя неверное
const inputEditProfileNameErrorName = formEditProfile.querySelector(`#${formFieldName.id}-error-name`);

//Ошибка поля ФРП имя: заполните оба поля
const inputEditProfileNameErrorRequired = formEditProfile.querySelector(`#${formFieldName.id}-error-required`);

//Ошибка поля ФРП профессия: профессия неверная
const inputEditProfileJobErrorJob = formEditProfile.querySelector(`#${formFieldJob.id}-error-job`);

//Ошибка поля ФРП профессия: заполните оба поля
const inputEditProfileJobErrorRequired = formEditProfile.querySelector(`#${formFieldJob.id}-error-required`);


/*===============================================================================*/

//const formAddPlaceFieldName = popupFormAddPlace.addPlaceName;

// Вынесем все необходимые элементы формы в константы

// Функция подчеркивания невалидного поля
const showUnderlineInputError = (element) => {
    element.classList.add('form__field_invalid');
    element.classList.remove('form__field_valid');
};
  
// Функция, которая удаляет подчеркивание с невалидного поля:
const hideUnderlineInputError = (element) => {
    element.classList.remove('form__field_invalid');
    element.classList.add('form__field_valid');
};

//Функция: высветить ошибку невалидного поля при заполнении

function showInputErrorText(element){
    element.classlist.remove('form-error_hidden');
    element.classlist.add('form-error_shown');
};

function preventEvtDefault(form){
    form.addEventListener('submit', function (evt){
        // Отменим стандартное поведение по сабмиту
         evt.preventDefault();
    });    
  };

  preventEvtDefault(popupFormAddPlace);
  preventEvtDefault(formEditProfile);

   // Функция, которая проверяет валидность поля
   function validateForm(){
    if (!formAddPlaceFieldName.validity.valid){
      showUnderlineInputError(formAddPlaceFieldName);
      console.log(formAddPlaceFieldName.validationMessage);
    } else {
      hideUnderlineInputError(formAddPlaceFieldName);
    }
  };

  function validateForm(){
    if (!formAddPlaceFieldUrl.validity.valid){
      showUnderlineInputError(formAddPlaceFieldUrl);
      } else {
      hideUnderlineInputError(formAddPlaceFieldUrl);
    }
  };

  validateForm(formFieldName);
  validateForm(formFieldJob);
  validateForm(formAddPlaceFieldName);
  validateForm(formAddPlaceFieldUrl);