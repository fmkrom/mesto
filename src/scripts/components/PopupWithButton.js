import {Popup} from "./Popup.js";

export class PopupWithButton extends Popup{
    constructor({popupSelector, handleConfirmDeletingButton}){
        super(popupSelector);
        this.popup = document.querySelector(popupSelector);
        this._buttonDefaultText = this.popup.querySelector('.form__button-save').textContent;
        this.confirmDeletingButton = this.popup.querySelector('.form__button-save');
        this.handleConfirmDeletingButton = handleConfirmDeletingButton;
    }
    
    setSubmitAction(action){
        this.handleConfirmDeletingButton = action;
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
        this.confirmDeletingButton.addEventListener('click',()=>{
            this.handleConfirmDeletingButton();
            console.log('Delete button pressed!');
        })
        super.setEventListeners();
    }
};

