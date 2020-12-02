//1. Импорт массива карточек:
import {initialCards} from "../data-arrays/initialCards.js"

//2. Импорт переменных из файла констант: 
import {
        popupEditProfile,
        formEditProfile,
        formFieldName,
        formFieldJob,
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
import {PopupWithForm} from "../components/PopupWithForm.js"

//4. Импорт функций:
import {
        editProfile,
        saveProfileChanges,
        
        clearForm,
 } from "../utils/utils.js"

//5. Импорт настроек валидации:
import {validationSettings} from "../settings/validationSettings.js";

import {selectors} from "../settings/selectors.js";
import { UserInfo } from "../components/UserInfo.js";

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

//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation(formEditProfile, validationSettings);

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);;
formCardValidator.enableValidation(popupFormAddPlace, validationSettings);

//Классы попапов:
/*const popupEditProfileClass = new PopupWithForm(
        {popup: popupEditProfile,
        submitFormFunction:(form)=>{
            form.querySelector

        }



        });
popupEditProfileClass.setEventListeners(buttonEditProfile, buttonCloseEditProfile);*/

//Класс: создаем новый попап с формой для попапа добавления карточки
const popupAddCardClass = new PopupWithForm({
        popup: popupAddCard,
        handleFormSubmit:(formData) =>{
            const card = new Card(formData.addPlaceName, formData.addPlaceUrl);
            const cardElement = card.generateCard();
            cardsContainer.addItem(cardElement);
            popupAddCardClass.closePopup();
        }
});

popupAddCardClass.setEventListeners(buttonAddCard, buttonCloseAddCard);

//Привязываем к кнопке функцию: добавить каторчку места
//popupFormAddPlace.addEventListener('submit', addPlace);

//1) Привязываем к кнопке функцию: открыть окно добавления карточки и
//2) В этой же функции прописываем очистку формы при открытии попапа:
buttonAddCard.addEventListener ('click', function(){
        //openPopup(popupAddCard);
        formAddPlaceFieldName.value = '';
        formAddPlaceFieldUrl.value = '';
        clearForm(popupFormButtonSavePlace, validationSettings);
});

//Привязываем к кнопкам функцию-класс: открыть окно редактирования профиля
buttonEditProfile.addEventListener('click', ()=>{
   const editUserInfo = new UserInfo(formFieldName, formFieldJob);
   editUserInfo.getUserInfo();
});

//Привязываем к кнопкам функцию-класс: сохранить изменения профиля
formEditProfile.addEventListener('submit', (evt)=>{
    const editUserInfo = new UserInfo(formFieldName, formFieldJob);
    editUserInfo.setUserInfo(evt);
    popupEditProfileClass.closePopup();
});
