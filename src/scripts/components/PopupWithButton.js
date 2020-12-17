import {Popup} from "./Popup.js";

export class PopupWithButton extends Popup {
    constructor({popup, button, handleConfirmDeletingCard}){
        super(popup);
        this.popup = popup;
        this.button = button;
        this.handleConfirmDeletingCard = handleConfirmDeletingCard;
    }

    openPopup(){
        super.openPopup();
    }

    setEventListeners(){
            this.handleConfirmDeletingCard();
        super.setEventListeners();
    }
};

