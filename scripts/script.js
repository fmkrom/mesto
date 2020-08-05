//1. Переменные для функции открытия и закрытия всплывающего окна

let editProfile = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__form-button-close');

let popUp = document.querySelector('.popup');

let formElement = document.querySelector('.popup__form-content');

//2. Переменные для функции сохранения данных во всплывающем окне

let nameInput = document.querySelector('.popup__form-field-name'); 
let jobInput = document.querySelector('.popup__form-field-job'); 

function popUpOpen(){
    popUp.classList.remove('popup');
    popUp.classList.add('popup_opened');

    console.log('Function open works!');
}

editProfile.addEventListener ('click', popUpOpen);

function popUpClose(){
    popUp.classList.remove('popup_opened');
    popUp.classList.add('popup');

    console.log('Function close works!');
}

closePopup.addEventListener ('click', popUpClose);


//Далее - функция сохранения данных

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    /*
    ВАЖНО! С момента переноса этих переменных:
    let name = nameInput.value;
    let job = jobInput.value;
    
    за пределы функции - функция работает, но данные перестают сохраняться!
    */

    let name = nameInput.value;
    let job = jobInput.value;

    let nameProfile = document.querySelector('.profile__name'); 
    let jobProfile = document.querySelector('.profile__job');
    
    nameProfile.textContent = (name);
    jobProfile.textContent = (job);

    console.log('Function save data works!');
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', popUpClose);

