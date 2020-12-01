import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popup, formSubmitFuction){
        super(popup);
        this._formSubmitFuction = formSubmitFuction;
    }

    openPopup(){
        super.openPopup();
    }

    openPopupWithForm=()=>{
        this.openedPopup = this.openPopup();

    }

    closePopup(){
        super.closePopup();
    }
    
    _closePopupWithEsc(event){
        super._closePopupWithEsc(event);
    }

    _closePopupWithOverlayClick(){
        super._closePopupWithOverlayClick();
    }

    setEventListeners(openButton, closeButton){
        super.setEventListeners(openButton, closeButton);
    }

};
