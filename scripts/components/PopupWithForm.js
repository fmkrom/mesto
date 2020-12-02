import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({popup, handleFormSubmit}){
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
        this._form = popup.querySelector('.form');
    }

    openPopup(){
        super.openPopup();
    }

    _getInputValues(){
        this._inputList = this._form.querySelectorAll('.form__field');
        this._formValues = {};
            this._inputList.forEach(input =>{
                this._formValues[input.name] = input.value;
            });
        return this._formValues;
    }

    closePopup(){
        super.closePopup();
    }
    
    _closePopupWithEsc(event){
        super._closePopupWithEsc(event);
    }

    _closePopupWithOverlayClick(){
        super._closePopupWithOverlayClick();
    }

    setEventListeners(openButton, closeButton){
        super.setEventListeners(openButton, closeButton);
        this._form.addEventListener('submit', (evt) =>{
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this._form.reset();
        });
    }
};