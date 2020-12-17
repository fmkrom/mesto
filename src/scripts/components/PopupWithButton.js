import {Popup} from "./Popup.js";

export class PopupWithButton extends Popup {
    constructor({popup, confirmDeletingButton, handleConfirmDeletingCard}){
        super(popup);
        this.popup = popup;
        this.confirmDeletingButton = confirmDeletingButton;
        this.handleConfirmDeletingCard = handleConfirmDeletingCard;
    }

    openPopup(){
        super.openPopup();
    }

    setEventListeners(){
        confirmDeletingButton.addEventListener('click', ()=>{
            this.handleConfirmDeletingCard();
        });
        super.setEventListeners();
    }
};

