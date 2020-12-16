import {Popup} from "./Popup.js";

export class PopupWithButton extends Popup {
    constructor({popup, handleConfirmDeletingCard}){
        super(popup);
        this.popup = popup;
        this.handleConfirmDeletingCard = handleConfirmDeletingCard;
    }

    openPopup(){
        super.openPopup();
    }

    setEventListeners(){
        const confirmDeletingButton = this.popup.querySelector('.form__button-save');
        confirmDeletingButton.addEventListener('click', ()=>{
            this.handleConfirmDeletingCard();
        });
        super.setEventListeners();
    }
};

