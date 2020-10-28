/*=====================================================================================*/
//Функции валидации форм

/*Первичный рабочий вариант кода: валидация работает, но нет:
а) Функции переключения кнопки

*/

/*===============================================================================*/

// Функция свечивания невалидного поля
function showInputError(formElement, inputElement, errorMessage){
    
  //Находим DOM-элемент с ошибкой по идентификатору:
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  //Добавляем подчеркивание:
  inputElement.classList.remove('form__field_valid');
  inputElement.classList.add('form__field_invalid');
  
  //Ставим текст: им будет validationMessage поля
  errorElement.textContent = errorMessage;

  //Добавляем это поле в DOM:
  errorElement.classList.remove('form__field_hidden');
  errorElement.classList.add('form-error_shown');
};

const hideInputError = (formElement, inputElement) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  
  // Удаляем подчеркивание:
  inputElement.classList.remove('form__field_invalid');
  inputElement.classList.add('form__field_valid');
  
  //Удаляем этот элемент из DOM
  errorElement.classList.remove('form-error_shown');
  errorElement.classList.add('form__field_hidden');
  
  //Делаем его текст пустым:
  errorElement.textContent = '';
}; 

/*=====================================================================================*/
//САМА ФУНКЦИЯ ВАЛИДАЦИИ

function validateForm(formElement, inputElement){
  if (!inputElement.validity.valid){
      showInputError(formElement, inputElement, inputElement.validationMessage);
  }else {
      hideInputError(formElement, inputElement);
  }
};

/*ВАЖНО! В этом варианте кода еще нет функции toggleButtonState - напишем ее!*/

/*===================================================================================*/
/*ФУНКЦИЯ: добавляем слушатели событий*/

function setEventListeners(formElement){
  
  //Делаем массив их всех элементов полей форм:
  const inputList = Array.from(formElement.querySelectorAll('.form__field'));
  
  inputList.forEach(function(inputElement){
      
      //Каждому элементу массива полей добавляем обработчик события:
  
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        validateForm(formElement, inputElement)
      });
  
  });
};

/*ФУНКЦИЯ: обеспечить валидацию форм*/

function enableValidation(){

  const formList = Array.from(document.querySelectorAll('.form'));

  // Переберём полученную коллекцию - каждому элементу в ней отменим поведение по умолчанию:
  formList.forEach(function(formElement){
      
      formElement.addEventListener('submit', function(evt){
          evt.preventDefault();
      });

      // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
      setEventListeners(formElement);
  });
};

enableValidation();

/*================================================================================================*/
//Черновые варианты функций из предыдущих версий

/*
//САМА ФУНКЦИЯ ВАЛИДАЦИИ

function validateForm(formElement, inputElement){
  if (!inputElement.validity.valid){
      showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
      hideInputError(formElement, inputElement);
  }
};

function checkValidity(inputList){
  //Проходимся по списку методом some
  return inputList.some(function(inputElement){
      return !inputElement.validity.valid;
  })
};

//Функция: переключение кнопки при валидации
const toggleButtonState = (inputList, buttonElement) => {
  
  // Если есть хотя бы один невалидный инпут
  if (checkValidity(inputList)) {
    buttonElement.classList.add('form__button-save_inactive');
    buttonElement.setAttribute('disabled', true);
  } else {
    //Иначе - сделаем кнопку активной:
    buttonElement.classList.add('form__button-save_active');
    buttonElement.removeAttribute('disabled', true);
  }
};

//ФУНКЦИЯ: добавляем слушатели событий

function setEventListeners(formElement){
  
  //Делаем массив их всех элементов полей форм:
  const inputList = Array.from(formElement.querySelectorAll('.form__field'));
  
    inputList.forEach(function(inputElement){
    //Каждому элементу массива полей добавляем обработчик события:
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        validateForm(formElement, inputElement)
      });

    toggleButtonState(inputList, buttonElement);
  
  });
};

//ФУНКЦИЯ: обеспечить валидацию форм

function enableValidation(){

  const formList = Array.from(document.querySelectorAll('.form'));

  // Переберём полученную коллекцию - каждому элементу в ней отменим поведение по умолчанию:
  formList.forEach(function(formElement){
      
      formElement.addEventListener('submit', function(evt){
          evt.preventDefault();
      });

      // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
      setEventListeners(formElement);
  });
};

enableValidation({
  formElement: '.form',
  inputElement: '.form__field',
  buttonElement: '.form__button-save',
  //inactiveButtonClass: 'popup__button_disabled',
  //inputErrorClass: 'form-error',
  //errorClass: 'form-error_shown'
});
*/