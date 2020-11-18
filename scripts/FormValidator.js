class FormValidator{
  constructor(settings, form){
    this._settings = settings;
    this._form = form;

    this._input = this._form.querySelector(this._settings.inputElement);
    this._button = this._form.querySelector(this._settings.buttonElement);
  }

  _showInputError(){
    const errorElement = this._form.querySelector(`#${this._input.id}-error`);
    this._input.classList.add(this._settings.invalidInputClass);
    errorElement.textContent = this._input.validationMessage;
    errorElement.classList.add(this._settings.errorShownClass);

    console.log(this._input.validationMessage);
    //console.log('_showInputError works!');
    
  };
  
  _hideInputError(){
    const errorElement = this._form.querySelector(`#${this._input.id}-error`);
    this._input.classList.remove(this._settings.invalidInputClass);
    errorElement.classList.remove(this._settings.errorShownClass);
    errorElement.textContent = '';
        
    //console.log('_hideInputError works!');
    
  };

  _validateInput(){
    if (!this._input.validity.valid){
      this._showInputError();
    } else {
      this._hideInputError();
    }
    //console.log('_validateInput works!');
  };

  _returnInvalidInput(){
    //console.log('_returnInvalidInput works!');
    const inputsArray = this._form.querySelectorAll(this._settings.inputElement);
    
    inputsArray.forEach((item) =>{
      if (!item.validity.valid){
        //console.log('all fields are valid!');
        return true;
      } else {
        //console.log('not all fields are valid!');
        return false
      }
    });
  };

  _toggleButtonState(){
    if (this._returnInvalidInput()){
      this._button.classList.add(this._settings.inactiveButtonClass);
      this._button.disabled = true;
      //console.log('_toggleButtonState works: button disabled!');  
    } else {
      this._button.classList.remove(this._settings.inactiveButtonClass);
      this._button.disabled = false;
      //console.log('_toggleButtonState works: button enabled!');  
    }
  };

  _setEventListeners(){
      const inputListArray = Array.from(this._form.querySelectorAll(this._settings.inputElement));
      
      inputListArray.forEach((item)=>{
        item.addEventListener('input',() =>{
          this._validateInput();
          this._toggleButtonState();
        });
        
    });
    //console.log('_setEventListeners works!');
  };

  enableValidation(){
    const formsList = Array.from(document.querySelectorAll(this._settings.formElement));
      formsList.forEach((item)=>{
        item.addEventListener('submit', (evt)=>{
          evt.preventDefault();
          this._setEventListeners();
        });
      });
      
      //console.log('enableValidation works!');
  };

};

export default FormValidator;