/*
ИТОГ: Валидация включается только при 2-м вызове
Второе поле формы не валидируется вообще!
*/

class FormValidator{
  constructor(settings, form){
    this._settings = settings;
    this._form = form;

    this._input = this._form.querySelector(this._settings.inputElement);
    this._button = this._form.querySelector(this._settings.buttonElement);
  }

  _showInputError(form, input, settings){
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.add(settings.invalidInputClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(settings.errorShownClass);

    //console.log(this._input.validationMessage);
    //console.log('_showInputError works!');
  };
  
  _hideInputError(form, input, settings){
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.remove(settings.invalidInputClass);
    errorElement.classList.remove(settings.errorShownClass);
    errorElement.textContent = '';
    
    //console.log('_hideInputError works!');
  };

  _validateInput(form, input, settings){
    if (!input.validity.valid){
      this._showInputError(form, input, settings);
    } else {
      this._hideInputError(form, input, settings);
    }
    //console.log('_validateInput works!');
  };

  /*ВАЖНО! По _returnInvalidInput: вот это правильная комбинация кода - как в оригинале.
  При такой комбинации формы валидируются и кнопка отключается, но на второй раз*/
  
    _returnInvalidInput(input){
      return input.some((input)=>{
      return !input.validity.valid;
      });
    };

  _toggleButtonState(inputsArray, button, settings){
    if (this._returnInvalidInput(inputsArray)){
      button.classList.add(settings.inactiveButtonClass);
      button.disabled = true;
      //console.log('_toggleButtonState works: button disabled!');  
    } else {
      button.classList.remove(settings.inactiveButtonClass);
      button.disabled = false;
      //console.log('_toggleButtonState works: button enabled!');  
    }
  };

  _setEventListeners(form, settings){
      const inputListArray = Array.from(form.querySelectorAll(settings.inputElement));
      const buttonToToggle = form.querySelector(settings.buttonElement);
      
      inputListArray.forEach((currentInput)=>{
        currentInput.addEventListener('input',() =>{
          this._validateInput(form, currentInput, settings);
          this._toggleButtonState(inputListArray, buttonToToggle, settings);
        });
    });
    //console.log('_setEventListeners works!');
  };

  enableValidation(form, settings){
    form.addEventListener('submit', (evt)=>{
          evt.preventDefault();
          //console.log(this._form);
          this._setEventListeners(this._form, this._settings);
    });
    //console.log('enableValidation works!');
  };
  
};

export default FormValidator;



/*
  _returnInvalidInput(){
    //console.log('_returnInvalidInput works!');
    //const inputsArray = Array.from(this._form.querySelectorAll(this._settings.inputElement));
    //console.log(inputsArray);
    //inputsArray.forEach((item) =>{
      if (!item.validity.valid){
        //console.log('all fields are valid!');
        return true;
      } else {
        //console.log('not all fields are valid!');
        return false
      }
    
      //});
  };
*/