import {Popup} from "./Popup.js";

export class PopupWithButton extends Popup{
    constructor({popupSelector, handleConfirmDeletingButton}){
        super(popupSelector);
        this.popup = document.querySelector(popupSelector);
        this._buttonDefaultText = this.popup.querySelector('.form__button-save').textContent;
        this.confirmDeletingButton = this.popup.querySelector('.form__button-save');
        this.handleConfirmDeletingButton = handleConfirmDeletingButton;
    }
<<<<<<< HEAD
    
    setSubmitAction(action){
        this.handleConfirmDeletingButton = action;
=======

    openPopup(){
        super.openPopup();
    }

    getDeleteButton(){
        return this.confirmDeletingButton;
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
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
<<<<<<< HEAD
            this.handleConfirmDeletingButton();
            console.log('Delete button pressed!');
=======
            this.handleConfirmDeletingCard();
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
        })
        super.setEventListeners();
    }
};

