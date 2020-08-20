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

//2.1. Объявление основных переменных для функция открытия и закрытия всплывающего окна

//2.1.1. Переменная с кодом всплывающего окна
let elementPopUp = document.querySelector('.popup');

//2.1.2.Переменная с контентом всплывающего окна (для submit)
let elementPopUpForm = document.querySelector('.popup__form-content');

//2.1.3. Поле формы: имя пользователя
let formFieldName = document.querySelector('.popup__form-field-name');

//2.1.4. Поле формы: профессия
let formFieldJob = document.querySelector('.popup__form-field-job'); 


//2.2. Основные переменные для данных на странице

//2.2.1. Имя пользователя на странице
let pageProfileName = document.querySelector('.profile__name'); 

//2.2.2. Имя пользователя по умолчанию
let formNameDefault = pageProfileName.textContent;

//2.2.3. Профессия на странице
let pageProfileJob = document.querySelector('.profile__job');

//2.2.4. Профессия по умолчанию
let formJobDefault = pageProfileJob.textContent;

//2.3.1. Кнопка "редактировать профиль"
let buttonEditProfile = document.querySelector('.profile__edit-button');

//2.3.2. Кнопка "сохранить изменения"
let buttonSaveChanges = document.querySelector('.popup__form-button-save');

//2.3.4. Кнопка "Закрыть без сохранения изменений"
let buttonClosePopupDismissChanges = document.querySelector('.popup__form-button-close');


//3.1. Переменные для обращения к массиву карточек и фото

//3.1.1. Секция elements, в котором будут располагаться темплаты
let sectionElements = document.querySelector('.elements');

//3.2.1. Темплата элемента. Обращаемся к ее содержанию
let elementTemplate = document.querySelector('.card__template').content;

//3.1.1. Изображение внутри карточки
let elementImage = elementTemplate.querySelector('.element__image');

//3.1.2. Аттрибут "Alt" фотографии на странице
let elementImageAlt = elementTemplate.querySelector('.element__image').alt;

//3.1.3. Переменная для заголовка карточки (для последующей ее перезаписи при помощи textContent)
let elementImageText = elementTemplate.querySelector('.element__text');

//3.2. Функция, добавляющая базовые карточки из массива на страницу

initialCards.forEach(function (element){
    
    //3.2.1. Переменная, клонирующая темплату: попробовать вынести ее за пределы функции
    let clonedTemplate = elementTemplate.cloneNode(true);
    
    //3.2.2. Наполнение темплаты содежимым
    clonedTemplate.querySelector('.element__image').src=(element.link);
    clonedTemplate.querySelector('.element__text').textContent=(element.name);
    
    sectionElements.append(clonedTemplate);
});



//5. Функции открытия, закрытия и редактирования всплывающего окна

function functionPopUpOpen(){
    elementPopUp.classList.remove('popup');
    elementPopUp.classList.add('popup_opened');

    formFieldName.value = (formNameDefault);
    formFieldJob.value = (formJobDefault);

}

buttonEditProfile.addEventListener('click', functionPopUpOpen);

function editProfileAndSaveChanges(evt){
    evt.preventDefault();
    
    pageProfileName.textContent = (formFieldName.value);
    pageProfileJob.textContent = (formFieldJob.value);

    formNameDefault = (formFieldName.value);
    formJobDefault = (formFieldJob.value);
    
    elementPopUp.classList.remove('popup_opened');
    elementPopUp.classList.add('popup');
    
}

elementPopUpForm.addEventListener('submit', editProfileAndSaveChanges);

function dismissChangesAndClosePopup(){
    
    formFieldName.textContent = (pageProfileName);
    formFieldJob.textContent = (pageProfileJob);

    elementPopUp.classList.remove('popup_opened');
    elementPopUp.classList.add('popup');
   
}

buttonClosePopupDismissChanges.addEventListener ('click', dismissChangesAndClosePopup);

