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

    getDeleteButton(){
        //console.log(this.confirmDeletingButton);
        return this.confirmDeletingButton;
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
            this.handleConfirmDeletingCard();
            
            console.log(this._buttonDefaultText);
        })
        super.setEventListeners();
    }
};

