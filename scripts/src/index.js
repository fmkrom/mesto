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
        formAddPlaceFieldUrl
} from "../utils/constants.js"

//3. Импорт класса валидатора:
import {FormValidator} from "../components/FormValidator.js";

//4. Импорт функций:
import {renderCards,
        openPopup, 
        closePopup,
        editProfile,
        saveProfileChanges,
        closePopupWithOverlayClick,
        addPlace,
        clearForm
} from "../utils/utils.js"

//5. Импорт настроек валидации:
import {validationSettings} from "../settings/validationSettings.js";

/*===*/
//Функции страницы:

//Обходим массив карточек функцией-рендерингом: 
renderCards(initialCards);

//Применяем класс валидатора к каждой из форм:
const formProfileValidator = new FormValidator(validationSettings, formEditProfile);
formProfileValidator.enableValidation(formEditProfile, validationSettings);

const formCardValidator = new FormValidator(validationSettings, popupFormAddPlace);;
formCardValidator .enableValidation(popupFormAddPlace, validationSettings);

//Привязываем к кнопке функцию: закрыть попап c полномасштабным изображением
buttonCloseFullsizeImage.addEventListener('click', () => { closePopup(popupFullsizeImage) });

//Привязываем к кнопке функцию: добавить каторчку места
popupFormAddPlace.addEventListener('submit', addPlace);

//1) Привязываем к кнопке функцию: открыть окно добавления карточки и
//2) В этой же функции прописываем очистку формы при открытии попапа:
buttonAddCard.addEventListener ('click', function(){
        openPopup(popupAddCard);
        formAddPlaceFieldName.value = '';
        formAddPlaceFieldUrl.value = '';
        clearForm(popupFormButtonSavePlace, validationSettings);
});

//Привязываем к кнопкам функцию: открыть окно редактирования профиля
buttonEditProfile.addEventListener('click', editProfile);
formEditProfile.addEventListener('submit', saveProfileChanges);

//Вызываем функции закрытия попапа кликом на оверлей и применяем их к соотв. формам:
closePopupWithOverlayClick(popupAddCard); 
closePopupWithOverlayClick(popupEditProfile);
closePopupWithOverlayClick(popupFullsizeImage); 