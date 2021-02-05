import {Popup} from "./Popup.js";

export class PopupWithButton extends Popup {
    constructor({popupSelector, handleConfirmDeletingCard}){
        super(popupSelector);
        this.popup = document.querySelector(popupSelector);
        this._buttonDefaultText = this._popup.querySelector('.form__button-save').textContent;
        this.confirmDeletingButton = this.popup.querySelector('.form__button-save');
        this.handleConfirmDeletingCard = handleConfirmDeletingCard;
    }

    openPopup(){
        super.openPopup();
    }

    setEventListeners(){
        this.confirmDeletingButton.addEventListener('click',()=>{
            this.handleConfirmDeletingCard();    
        })
        super.setEventListeners();
    }
};

