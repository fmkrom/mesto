import {Popup} from "./Popup.js";

import {fullsizeImage,
        fullsizeImageTitle
    } from "../utils/constants.js";

export class PopupWithFullSizeImage extends Popup {
    constructor(popup){
        super(popup);
    }

    openPopup(){
        super.openPopup();
    }

    openFullSizeImage=(name, link)=>{
        this.openedPopup = this.openPopup();
        console.log('openFullSizeImage in PopupWithFullSizeImage works!');
        fullsizeImage.setAttribute('src', link);
        fullsizeImageTitle.textContent = name;
        fullsizeImage.setAttribute('alt', name);
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
