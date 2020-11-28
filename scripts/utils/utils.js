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

//Функция создания класса Карточки (class Card)
function createNewCard(name, link){
    const card = new Card(name, link);
    const cardElement = card.generateCard();
    cardsNode.prepend(cardElement);
};

//Функция обработки карточек на основе функции создания новой карточки:
export function renderCards(array){
    array.forEach((item)=>{
        createNewCard(item.name, item.link);
    });
};

//Функции открытия и закрытия попапов:
export function openPopup(popupName){
    popupName.classList.add('popup_open');
    document.addEventListener('keydown', closePopupByEsc);
};

export function closePopup(popupName){
    popupName.classList.remove('popup_open');
    document.removeEventListener('keydown', closePopupByEsc);
};

export function closePopupByEsc(event){ 
    const popupOpen = document.querySelector('.popup_open');
    if (event.key === 'Escape'){ 
        closePopup(popupOpen);
    }; 
}; 

//Функция редактирования профиля:
export function editProfile(){
    openPopup(popupEditProfile);
    formFieldName.value = pageProfileName.textContent;
    formFieldJob.value = pageProfileJob.textContent;
};

//Функция: сохранить изменения профиля
export function saveProfileChanges(evt){
    evt.preventDefault();
    pageProfileName.textContent = formFieldName.value;
    pageProfileJob.textContent = formFieldJob.value;
    closePopup(popupEditProfile);
};

//Функция добавить и сохранить место
export function addPlace(evt){
    evt.preventDefault()
    createNewCard(formAddPlaceFieldName.value, formAddPlaceFieldUrl.value);
    closePopup(popupAddCard);
};

//Функция открытия полномасштабного изображения:
export function openFullSizeImage(event){
    openPopup(popupFullsizeImage);
    const eventTarget = event.target;
    const openedFullsizeImage = eventTarget.src;
    fullsizeImage.setAttribute('src', openedFullsizeImage);

    const cardElement = eventTarget.closest('.card__rectangle');
    const openedFullsizeImageTitle = cardElement.querySelector('.card__title').textContent;
    fullsizeImageTitle.textContent = (openedFullsizeImageTitle);
    fullsizeImageTitle.setAttribute('alt', openedFullsizeImageTitle);
};

//Функция очистки формы после сабмита
export function clearForm(button, settings){
    button.classList.add(settings.inactiveButtonClass);
    button.disabled = true;
}

//Функция закрытия попапа по клику на оверлей
export function closePopupWithOverlayClick(popup){
    popup.addEventListener('click', function(event){
        if (event.target.classList.contains('popup__overlay') 
        || event.target.classList.contains('popup__button-close')){
            closePopup(popup);
        }
    }); 
};