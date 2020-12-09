import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({popup, handleFormSubmit}){
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._form = popup.querySelector('.form');
    }

    _getInputValues(){
        this._inputList = this._form.querySelectorAll('.form__field');
        this._formValues = {};
            this._inputList.forEach(input =>{
                this._formValues[input.name] = input.value;
            });
        return this._formValues;
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) =>{
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this._form.reset();
        });
    }
};