import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}){
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.form');
        this._buttonDefaultText = this._popup.querySelector('.form__button-save').textContent;
    }

    _getInputValues(){
        this._inputList = this._form.querySelectorAll('.form__field');
        this._formValues = {};
            this._inputList.forEach(input =>{
                this._formValues[input.name] = input.value;
            });
        return this._formValues;
    }

    changeButtonText(status){
        const popupButton = this._popup.querySelector('.form__button-save');
        if (status === true){
            popupButton.textContent = "Сохранение..."
        } else if (status === false) {
            popupButton.textContent = this._buttonDefaultText;
        }
    };

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) =>{
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this._form.reset();
        });
    }
};