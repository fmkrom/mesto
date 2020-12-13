import {Popup} from "./Popup.js";

export class PopupWithButton extends Popup {
    constructor({popup}){
        super(popup);
        this.popup = popup;
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
        console.log('This is NewCardClass', newCardClass);
        confirmDeletingButton.addEventListener('click', ()=>{
            this._confirmDeletingCard(newCardClass);
        })
    }
};