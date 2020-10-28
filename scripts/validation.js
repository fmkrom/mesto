//ФУНКЦИИ ВАЛИДАЦИИ ФОРМ

//Функция: высветить невалидное поле - работает

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

//Функция: убрать подсветку невалидного поля: работает

function hideInputError(formElement, inputElement){
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

//Функция: вернуть при невалидности!
function returnInvalidInput(inputList){
  
  return inputList.some(function(inputElement){
  return !inputElement.validity.valid;
  });

}

//Переключение кнопки
function toggleButtonState(inputList, buttonElement){
  
  if (returnInvalidInput(inputList)){
    buttonElement.classList.add('form__button-save_inactive');
    buttonElement.disabled = true;

  } else {
    buttonElement.classList.remove('form__button-save_inactive');
    buttonElement.classList.add('form__button-save_active');
    buttonElement.disabled = false;
  }
}; 

//Функция: проверка валидности полей

function isValid(formElement, inputElement){
  
  if (!inputElement.validity.valid){
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
};

//Функция: добавляем слушатели событий
function setEventListeners(formElement){
  
  //Делаем массив их всех элементов полей форм:
  const inputListArray = Array.from(formElement.querySelectorAll('.form__field'));

  //Добавляем константу кнопки:
  const buttonToToggle = formElement.querySelector('.form__button-save');
  
  inputListArray.forEach(function(inputElement){
      
      //Каждому элементу массива полей добавляем обработчик события:
        inputElement.addEventListener('input', function(){
        // Внутри колбэка вызовем isValid, передав ей форму и проверяемый элемент
        isValid(formElement, inputElement);
        
        //Применяем переключение кнопки: к массиву полей форм и константе кнопки - т.е. задаем переменные этой функции
        toggleButtonState(inputListArray, buttonToToggle);
      });
  });
};

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
});