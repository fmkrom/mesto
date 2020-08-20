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

//А. Форма редактирования профиля

//2.1.1. Переменная с кодом всплывающего окна
let elementPopUpEditProfile = document.querySelector('.popup_edit-profile');

//2.1.2.Переменная с контентом всплывающего окна (для submit) - в окне редактирования профиля
let elementPopUpFormEditProfile = document.querySelector('.popup__form-content-profile');

//2.1.3. Поле формы: имя пользователя
let formFieldName = document.querySelector('.popup__form-field-name');

//2.1.4. Поле формы: профессия
let formFieldJob = document.querySelector('.popup__form-field-job'); 


//Б. Форма добавления фото
let elementPopUpAddPlace = document.querySelector('.popup_add-place');

//2.1.5. Кнопка "Добавить место"
const buttonAddPlace = document.querySelector('.profile__add-button');

//2.1.6.Переменная с контентом ФОРМЫ всплывающего окна (для submit) - в окне добавления места
let elementPopUpFormAddPlace = document.querySelector('.popup__form-content-add-place');



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

//2.3.2.1. Кнопка "сохранить изменения" профиля
let buttonSaveProfileChanges = document.querySelector('.popup__form-button-save-profile');

//2.3.2.2. Кнопка "создать и сохранить" для окна места
let buttonCreatePlace = document.querySelector('.popup__form-button-save-place');


//2.3.2.2.1. Поле формы окна "Добавить место" - название места 
let formAddPlaceFieldName = document.querySelector('.popup__form-field-place-name');

//2.3.2.2.2. Поле формы окна "Добавить место" - ссылка на фото места
let formAddPlaceFieldUrl = document.querySelector('.popup__form-field-photo-url');

//2.3.4. Кнопка "Закрыть профиль без сохранения изменений"
let buttonCloseEditProfilePopupDismissChanges = document.querySelector('.popup__form-button-close-edit-profile');

//2.3.5. Кнопка "Закрыть без сохранения изменений" окно добавления фото
let buttonCloseAddPlacePopupDismissChanges = document.querySelector('.popup__form-button-close-add-place');

//ПЕРЕМЕННЫЕ ДЛЯ МАССИВА КАРТОЧЕК

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

//ПЕРЕМЕННЫЕ ДЛЯ ДОБАВЛЕНИЯ ЭЛЕМЕНТОВ В МАССИВ ФОТО



//ФУНКЦИИ

//3.2. Функция, добавляющая базовые карточки из массива на страницу

initialCards.forEach(function (element){
    
    //3.2.1. Переменная, клонирующая темплату: попробовать вынести ее за пределы функции
    let clonedTemplate = elementTemplate.cloneNode(true);
    
    //3.2.2. Наполнение темплаты содежимым
    clonedTemplate.querySelector('.element__image').src=(element.link);
    clonedTemplate.querySelector('.element__text').textContent=(element.name);
    
    sectionElements.append(clonedTemplate);
});


//5. Функции всплывающих окон

//А. Функции окна "Редактировать профиль"

//5.1. Функция: открыть окно редактирования профиля

function functionPopUpOpenEditProfile(){
    elementPopUpEditProfile.classList.remove('popup');
    elementPopUpEditProfile.classList.add('popup_opened');

    formFieldName.value = (formNameDefault);
    formFieldJob.value = (formJobDefault);

}

buttonEditProfile.addEventListener('click', functionPopUpOpenEditProfile);

//5.2. Функция: редактировать профиль, сохранить изменения и закрыть окно

function editProfileAndSaveChanges(evt){
    evt.preventDefault();
    
    pageProfileName.textContent = (formFieldName.value);
    pageProfileJob.textContent = (formFieldJob.value);

    formNameDefault = (formFieldName.value);
    formJobDefault = (formFieldJob.value);
    
    elementPopUpEditProfile.classList.remove('popup_opened');
    elementPopUpEditProfile.classList.add('popup');
    
}

elementPopUpFormEditProfile.addEventListener('submit', editProfileAndSaveChanges);

//5.3. Функция: закрыть окно редактирования профиля и не сохранять изменения

function dismissChangesAndClosePopup(){
    
    formFieldName.textContent = (pageProfileName);
    formFieldJob.textContent = (pageProfileJob);

    elementPopUpEditProfile.classList.remove('popup_opened');
    elementPopUpEditProfile.classList.add('popup');
   
}

buttonCloseEditProfilePopupDismissChanges.addEventListener ('click', dismissChangesAndClosePopup);

//Б. Функции окна "Добавить новую карточку"

//5.1.1. Функция: открыть окно добавления карточки
function functionPopUpOpenAddPlace(){
    elementPopUpAddPlace.classList.remove('popup');
    elementPopUpAddPlace.classList.add('popup_opened');
};

//5.1.2. Привязываем эту функцию к кнопке "добавить" в окне добавления карточки
buttonAddPlace.addEventListener('click', functionPopUpOpenAddPlace);

//5.2.1. Функция - закрыть окно добавления карточки
function dismissChangesAndClosePopupAddPlace(){
    
    elementPopUpAddPlace.classList.add('popup');
    elementPopUpAddPlace.classList.remove('popup_opened');
}

//5.2.2. Привязываем эту функцию к кнопке "закрыть" в окне добавления карточки
buttonCloseAddPlacePopupDismissChanges.addEventListener ('click', dismissChangesAndClosePopupAddPlace);







