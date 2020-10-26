//Форма добавления места:
//const popupFormAddPlace = document.forms.addPlace;

//2.3.2.2.1. Поле формы окна "Добавить место" - название места 
//const formAddPlaceFieldName = popupFormAddPlace.addPlaceName;

//2.3.2.2.2. Поле формы окна "Добавить место" - ссылка на фото места
//const formAddPlaceFieldUrl = popupFormAddPlace.addPlaceUrl;

/*==============================================================================*/

//Форма редактирования профиля
//const formEditProfile = document.forms.editProfile;

//2.1.3. Поле формы: имя пользователя
//const formFieldName = formEditProfile.editProfileName;

//2.1.4. Поле формы: профессия
//const formFieldJob = formEditProfile.editProfileJob;

/*===============================================================================*/

//const formAddPlaceFieldName = popupFormAddPlace.addPlaceName;

// Вынесем все необходимые элементы формы в константы

// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
  element.classList.add('form__field_invalid');
  element.classList.remove('form__field_valid');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('form__field_invalid');
  element.classList.add('form__field_valid');
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!formAddPlaceFieldName.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput);
  } else {
    // Если проходит, скроем
    hideInputError(formInput);
  }
};
 
popupFormAddPlace.addEventListener('submit', function (evt){
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
});

// Вызовем функцию isValid на каждый ввод символа
formAddPlaceFieldName.addEventListener('input', isValid);
