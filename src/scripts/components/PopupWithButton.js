import {Popup} from "./Popup.js";

export class PopupWithButton extends Popup {
    constructor({popup}){
        super(popup);
    }

    openPopup(){
        super.openPopup();
    }

    setEventListeners(){
        super.setEventListeners();    
    }
};