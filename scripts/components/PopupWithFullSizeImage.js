import {Popup} from "./Popup.js";

import {fullsizeImage,
        fullsizeImageTitle
    } from "../utils/constants.js";

export class PopupWithFullSizeImage extends Popup {
    constructor(popup) {
        //this._popup = popup;
        super(popup);
    }

    openPopup(popupSelector){
        super.openPopup(popupSelector);
        fullsizeImage.setAttribute('src', link);
        fullsizeImageTitle.textContent = name;
        fullsizeImageTitle.setAttribute('alt', name);
    }

    closePopup(popupSelector){
        super.closePopup(popupSelector);
    }
    
    _closePopupWithEsc(event){
        super._closePopupWithEsc(event);
    }

    _closePopupWithOverlayClick(popupSelector){
        super._closePopupWithOverlayClick(popupSelector);
    }

    setEventListeners(openButton, closeButton){
        super.setEventListeners(openButton, closeButton);
    }

};



/*
Создайте класс PopupWithImage
Создайте класс PopupWithImage, который наследует от Popup. 
Этот класс должен перезаписывать родительский метод open. 
В методе open класса PopupWithImage нужно вставлять в попап картинку 
и атрибут src изображения и подпись к картинке.
*/