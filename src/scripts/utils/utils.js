//Импортируем необходимые константы из файла констант:
import {   
    cardsNode,
    popupEditProfile,
    formFieldName,
    formFieldJob,
    popupAddCard,
    pageProfileName,
    pageProfileJob,
    formAddPlaceFieldName,
    formAddPlaceFieldUrl,
    popupFormButtonSavePlace,
    popupFullsizeImage,
    fullsizeImage,
    fullsizeImageTitle,
} from "./constants.js"

//Импортируем настройки валидации:
import {validationSettings
} from "../settings/validationSettings.js"

//Импортируем класс Карточки:
import {Card} from "../components/Card.js"


//Функция редактирования профиля:
export function editProfile(){
    //openPopup(popupEditProfile);
    formFieldName.value = pageProfileName.textContent;
    formFieldJob.value = pageProfileJob.textContent;
};

//Функция: сохранить изменения профиля
export function saveProfileChanges(evt){
    evt.preventDefault();
    pageProfileName.textContent = formFieldName.value;
    pageProfileJob.textContent = formFieldJob.value;
    //closePopup(popupEditProfile);
};

//Функция очистки формы после сабмита
export function clearForm(button, settings){
    button.classList.add(settings.inactiveButtonClass);
    button.disabled = true;
}

export function setButtonListeners(button, saveButton, newPopupClass){
    button.addEventListener('click', ()=> {newPopupClass.openPopup()});
    saveButton.addEventListener('click', ()=> {newPopupClass.setEventListeners()});
}

