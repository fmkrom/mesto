//Функции валидации форм

//Функция: высветить невалидное поле - работает

function showInputError(form, input, parameters){
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.add(parameters.invalidInputClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(parameters.errorShownClass);
    
  };
  
  function hideInputError(form, input, parameters){
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.remove(parameters.invalidInputClass);
    errorElement.classList.remove(parameters.errorShownClass);
    errorElement.textContent = '';
    
  }; 
  
  function isValid(form, input, parameters){
      if (!input.validity.valid){
        showInputError(form, input, parameters);
      } else {
        hideInputError(form, input, parameters);
      }
  };
  
  //Функция: вернуть при невалидности
  function returnInvalidInput(input){
    return input.some(function(input){
    return !input.validity.valid;
    });
  };
  
  //Переключение кнопки
  function toggleButtonState(inputsArray, button, parameters){
    if (returnInvalidInput(inputsArray)){
      button.classList.add(parameters.inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(parameters.inactiveButtonClass);
      button.disabled = false;
    }
    
  }; 
  
  //Функция: добавляем слушатели событий
  function setEventListeners(form, parameters){
    const inputListArray = Array.from(form.querySelectorAll(parameters.inputNodeElement));
    const buttonToToggle = form.querySelector(parameters.buttonNodeElement);
    
    inputListArray.forEach(function(input){
        input.addEventListener('input', function(){
          isValid(form, input, parameters);
          toggleButtonState(inputListArray, buttonToToggle, parameters);
        });
    });
    
  };
  
  //Функция: включить валидацию
  function enableValidation(parameters){
    const formsList = Array.from(document.querySelectorAll(parameters.formNodeElement));
      
    formsList.forEach(function(form){
        form.addEventListener('submit', function(evt){
          console.log(form);
            evt.preventDefault();
  
            setEventListeners(form, parameters);
        });
  
      formsList.forEach(function(form){
        setEventListeners(form, parameters);
      });
  
    });
  
  };
  
  const validationParameters = {
    formNodeElement: '.form',
    inputNodeElement: '.form__field',
    buttonNodeElement: '.form__button-save',
    
    inactiveButtonClass: 'form__button-save_inactive',
    invalidInputClass: 'form__field_invalid',
    errorShownClass: 'form-error_shown'
  };
  
  enableValidation(validationParameters);