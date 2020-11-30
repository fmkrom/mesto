//1. Импорт массива карточек:
import {initialCards} from "../data-arrays/initialCards.js"

//2. Импорт переменных из файла констант: 
import {
        popupEditProfile,
        formEditProfile,
        popupAddCard,
        buttonAddCard,
        popupFormAddPlace,
        buttonEditProfile,
        popupFullsizeImage,
        buttonCloseFullsizeImage,
        popupFormButtonSavePlace,
        formAddPlaceFieldName,
        formAddPlaceFieldUrl,
        buttonCloseAddCard,
        buttonCloseEditProfile,
        cardsNode
} from "../utils/constants.js"

import {Section} from "../components/Section.js"

import {Card} from "../components/Card.js"

//3. Импорт класса валидатора:
import {FormValidator} from "../components/FormValidator.js";

//3.2. Импорт класса попапа
import {Popup} from "../components/Popup.js";
import {PopupWithFullSizeImage} from "../components/PopupWithFullSizeImage.js";

//4. Импорт функций:
import {//renderCards,
        //openPopup, 
        //closePopup,
        editProfile,
        saveProfileChanges,
        //closePopupWithOverlayClick,
        addPlace,
        clearForm,
 } from "../utils/utils.js"

//5. Импорт настроек валидации:
import {validationSettings} from "../settings/validationSettings.js";

import {selectors} from "../settings/selectors.js";

/*===*/
//Класс контейнера, содержащего карточки:

const cardsContainer = new Section(
       {items: initialCards,
        renderer: (item) =>{
                const card = new Card(item.name, item.link);
                const cardElement = card.generateCard();
                cardsContainer.addItem(cardElement);
        }
}, selectors.containerClass);

cardsContainer.renderItems();

//Функции страницы:

//Обходим массив карточек функцией-рендерингом: 
//renderCards(initialCards);



//Функция создания класса Карточки (class Card)
/*function createNewCard(name, link){
    const card = new Card(name, link);
    const cardElement = card.generateCard();
    cardsNode.prepend(cardElement);
};*/

//Функция обработки карточек на основе функции создания новой карточки:
/*export function renderCards(array){
    array.forEach((item)=>{
        createNewCard(item.name, item.link);
    });
};*/







//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation(formEditProfile, validationSettings);

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);;
formCardValidator.enableValidation(popupFormAddPlace, validationSettings);

//Классы попапов:
const popupEditProfileClass = new Popup(popupEditProfile);
popupEditProfileClass.setEventListeners(buttonEditProfile, buttonCloseEditProfile);

const popupAddCardClass = new Popup(popupAddCard); 
popupAddCardClass.setEventListeners(buttonAddCard, buttonCloseAddCard);


//Класс попапа с полномасштабным изображением:
const popupWithFullSizeImageClass = new PopupWithFullSizeImage(popupFullsizeImage);


//Привязываем к кнопке функцию: закрыть попап c полномасштабным изображением
//buttonCloseFullsizeImage.addEventListener('click', () => { closePopup(popupFullsizeImage) });

//Привязываем к кнопке функцию: добавить каторчку места
popupFormAddPlace.addEventListener('submit', addPlace);

//1) Привязываем к кнопке функцию: открыть окно добавления карточки и
//2) В этой же функции прописываем очистку формы при открытии попапа:
buttonAddCard.addEventListener ('click', function(){
        //openPopup(popupAddCard);
        formAddPlaceFieldName.value = '';
        formAddPlaceFieldUrl.value = '';
        clearForm(popupFormButtonSavePlace, validationSettings);
});

//Привязываем к кнопкам функцию: открыть окно редактирования профиля
buttonEditProfile.addEventListener('click', editProfile);
formEditProfile.addEventListener('submit', saveProfileChanges);

//Вызываем функции закрытия попапа кликом на оверлей и применяем их к соотв. формам:
//closePopupWithOverlayClick(popupAddCard); 
//closePopupWithOverlayClick(popupEditProfile);
//closePopupWithOverlayClick(popupFullsizeImage); 