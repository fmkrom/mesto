import {Popup} from "./Popup.js";

export class PopupWithButton extends Popup {
    constructor({popup}){
        super(popup);
    }

    openPopup(){
        super.openPopup();
    }

    _confirmDeletingCard(newCardClass){
        newCardClass._deleteCard(newCardClass);
    }

    setEventListeners(newCardClass){
        super.setEventListeners();
        const confirmDeletingButton = this.popup.querySelector('.form__button-save');
        confirmDeletingButton.addEventListener('click', ()=>{
            _confirmDeletingCard(newCardClass);
        })
    }
};