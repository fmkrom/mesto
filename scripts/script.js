let editProfile = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__form-button-close');

let popUp = document.querySelector('.popup');

function popUpOpen(){
    popUp.classList.remove('popup');
    popUp.classList.add('popup_opened');
    
}

editProfile.addEventListener ('click', popUpOpen);

function popUpClose(){
    popUp.classList.remove('popup_opened');
    popUp.classList.add('popup');
}

closePopup.addEventListener ('click', popUpClose);


//Далее - функция сохранения данных
// Находим форму в DOM
let formElement = document.querySelector('.popup__form-content');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    // Находим поля формы в DOM
    let nameInput = document.querySelector('.popup__form-field-name'); 
    let jobInput = document.querySelector('.popup__form-field-job'); 

    // Получите значение полей из свойства value
    let name = nameInput.value;
    let job = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    let nameProfile = document.querySelector('.profile__name'); 
    let jobProfile = document.querySelector('.profile__job');
    
    // Вставьте новые значения с помощью textContent
    nameProfile.textContent = (name);
    jobProfile.textContent = (job);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', popUpClose);

