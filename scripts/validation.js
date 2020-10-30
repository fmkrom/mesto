//ФУНКЦИИ ВАЛИДАЦИИ ФОРМ

//Функция: высветить невалидное поле - работает

function showInputError(formElement, inputElement, errorMessage){
    
  //Находим DOM-элемент с ошибкой по идентификатору:
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  //Добавляем подчеркивание:
  inputElement.classList.add('form__field_invalid');
  
  //Ставим текст: им будет validationMessage поля
  errorElement.textContent = errorMessage;

  //Добавляем это поле в DOM:
  errorElement.classList.add('form-error_shown');

  console.log('function showInputError works!');
  
};

//Функция: убрать подсветку невалидного поля: работает

function hideInputError(formElement, inputElement){
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  
  // Удаляем подчеркивание:
  inputElement.classList.remove('form__field_invalid');
    
  //Удаляем этот элемент из DOM
  errorElement.classList.remove('form-error_shown');
    
  //Делаем его текст пустым:
  errorElement.textContent = '';
 
  console.log('function hideInputError works!');
}; 

//Функция: вернуть при невалидности!
function returnInvalidInput(inputList){
  
  console.log('function returnInvalidInput works!');
  
  return inputList.some(function(inputElement){
  return !inputElement.validity.valid;
  });
};

//Переключение кнопки
function toggleButtonState(inputList, buttonElement){
  
  if (returnInvalidInput(inputList)){
    buttonElement.classList.add('form__button-save_inactive');
    buttonElement.disabled = true;

  } else {
    buttonElement.classList.remove('form__button-save_inactive');
    buttonElement.disabled = false;
  }

  console.log('function toggleButtonState works!');
}; 

//Функция: проверка валидности полей

function isValid(formElement, inputElement){
  
  if (!inputElement.validity.valid){
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }

    console.log('function isValid works!');
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

  console.log('function setEventListeners works!');
};

function enableValidation({formNodeElement}){

  const formList = Array.from(document.querySelectorAll(formNodeElement));

  // Переберём полученную коллекцию - каждому элементу в ней отменим поведение по умолчанию:
    formList.forEach(function(formNodeElement){
      
      formNodeElement.addEventListener('submit', function(evt){
          evt.preventDefault();
      });

      // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
      setEventListeners(formNodeElement);
    });

    console.log('function enableValidation works!');
};

enableValidation({
  formNodeElement: '.form',
  inputNodeElement: '.form__field',
  buttonNodeElement: '.form__button-save',
  
  inactiveButtonClass: 'form__button-save_inactive',
  invalidInputClass: 'form__field_invalid',
  errorShownClass: 'form-error_shown'
});