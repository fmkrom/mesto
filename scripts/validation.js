//ФУНКЦИИ ВАЛИДАЦИИ ФОРМ

//Функция: высветить невалидное поле - работает

function showInputError(form, input){
    
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add('form__field_invalid');
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add('form-error_shown');
  console.log('function showInputError works!');
};

function hideInputError(form, input){
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove('form__field_invalid');
  errorElement.classList.remove('form-error_shown');
  errorElement.textContent = '';
  console.log('function hideInputError works!');
}; 

function isValid(form, input){
    if (!input.validity.valid){
      showInputError(form, input, input.validationMessage);
    } else {
      hideInputError(form, input);
    }
    console.log('function isValid works!');
};

//Функция: вернуть при невалидности!
function returnInvalidInput(input){
  console.log('function returnInvalidInput works!');
  return input.some(function(input){
  return !input.validity.valid;
  });
};

//Переключение кнопки
function toggleButtonState(inputsArray, button){
  if (returnInvalidInput(inputsArray)){
    button.classList.add('form__button-save_inactive');
    button.disabled = true;
  } else {
    button.classList.remove('form__button-save_inactive');
    button.disabled = false;
  }
  console.log('function toggleButtonState works!');
}; 

//Функция: добавляем слушатели событий
function setEventListeners(form){
  const inputListArray = Array.from(form.querySelectorAll('.form__field'));
  const buttonToToggle = form.querySelector('.form__button-save');
  
  inputListArray.forEach(function(input){
      input.addEventListener('input', function(){
        isValid(form, input);
        toggleButtonState(inputListArray, buttonToToggle);
      });
  });
  console.log('function setEventListeners works!');
};

function enableValidation({formNodeElement, inputNodeElement, buttonNodeElement, inactiveButtonClass, invalidInputClass, errorShownClass}){

  const formList = Array.from(document.querySelectorAll(formNodeElement));

    formList.forEach(function(formNodeElement){
      
      formNodeElement.addEventListener('submit', function(evt){
          evt.preventDefault();
      });

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