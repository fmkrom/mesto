export class FormValidator{
  constructor(settings, form){
    this._settings = settings;
    this._form = form;
    this._button = this._form.querySelector(this._settings.buttonElement);
  }

  _showInputError(form, input, settings){
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.add(settings.invalidInputClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(settings.errorShownClass);
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

  enableValidation(){
      const inputListArray = Array.from(this._form.querySelectorAll(this._settings.inputElement));
      const buttonToToggle = this._button;
      
      this._toggleButtonState(inputListArray, buttonToToggle, this._settings);

      inputListArray.forEach((currentInput)=>{
        currentInput.addEventListener('input',() =>{
          this._validateInput(this._form, currentInput, this._settings);
          this._toggleButtonState(inputListArray, buttonToToggle, this._settings);
        });
    });

    this._form.addEventListener('submit', (evt)=>{
      evt.preventDefault();
    });
  };
};