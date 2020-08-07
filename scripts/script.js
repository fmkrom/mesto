// I. Для начала объявляем все переменные

//1. Всплывающее окно:
let elementPopUp = document.querySelector('.popup');

//2. Форма (т.е. сами поля формы) всплывающего окна:
let elementPopUpForm = document.querySelector('.popup__form-content');


/*3. Поля формы во всплывающем окне*/

//3.1. Поле "Имя" в форме всплывающего окна
let formFieldName = document.querySelector('.popup__form-field-name');

//3.2. Поле "Род занятий" в форме всплывающего окна
let formFieldJob = document.querySelector('.popup__form-field-job'); 


/*4. Данные в профиле в шапке сайта*/

//4.1. Поле "Имя" в разделе "Профиль" сайта
let pageProfileName = document.querySelector('.profile__name'); 

//4.1.1. Промежуточная перменная - текстовое содержание поля "Имя" в разделе "Профиль" сайта 
let formNameDefault = pageProfileName.textContent;

//4.2. Поле "Род занятий" в разделе "Профиль" сайта
let pageProfileJob = document.querySelector('.profile__job');

//4.1.1. Промежуточная перменная - текстовое содержание поля "Имя" в разделе "Профиль" сайта 
let formJobDefault = pageProfileJob.textContent;


//3. Кнопка "редактировать профиль" (карандаш)
let buttonEditProfile = document.querySelector('.profile__edit-button');

//4. Кнопка "Сохранить" во всплывающем окне
let buttonSaveChanges = document.querySelector('.popup__form-button-save');

//5. Кнопка "закрыть окно редактирования и не сохранять изменения" во всплывающем окне
let buttonClosePopupDismissChanges = document.querySelector('.popup__form-button-close');

/*II. Функции с переменными, определенными выше*/

//А. Функция "Открыть всплывающее окно"

function functionPopUpOpen(){
    elementPopUp.classList.remove('popup');
    elementPopUp.classList.add('popup_opened');

    formFieldName.value = (formNameDefault);
    formFieldJob.value = (formJobDefault);

    console.log('Function open Popup works!');
}

buttonEditProfile.addEventListener('click', functionPopUpOpen);

//Б. Функция "Внести изменения, сохранить и закрыть окно"

function editProfileAndSaveChanges(evt){
    evt.preventDefault();
    
    pageProfileName.textContent = (formFieldName.value);
    pageProfileJob.textContent = (formFieldJob.value);

    formNameDefault = (formFieldName.value);
    formJobDefault = (formFieldJob.value);
    
    elementPopUp.classList.remove('popup_opened');
    elementPopUp.classList.add('popup');

    console.log('Function close Popup and Save Changes Works!');
}

elementPopUpForm.addEventListener('submit', editProfileAndSaveChanges);

//В. Функция "Отменить изменения и закрыть окно"

function dismissChangesAndClosePopup(){
    
    formFieldName.textContent = (pageProfileName);
    formFieldJob.textContent = (pageProfileJob);

    elementPopUp.classList.remove('popup_opened');
    elementPopUp.classList.add('popup');

    console.log(formFieldName.value);
    console.log(formFieldJob.value);

    console.log('Function close Popup and dismiss changes Works!');
}

buttonClosePopupDismissChanges.addEventListener ('click', dismissChangesAndClosePopup);
