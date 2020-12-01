import {Popup} from "./Popup.js";

import {fullsizeImage,
        fullsizeImageTitle
    } from "../utils/constants.js";

export class PopupWithFullSizeImage extends Popup {
    constructor(popup){
        super(popup);
    }

    openPopup(popupSelector){
        super.openPopup(popupSelector);
    }

    openFullSizeImage=(name, link)=>{
        this.openedPopup = this.openPopup();

        console.log(popupSelector);

        const popupWithFullSizeImage = document.querySelector(popupSelector);
            
        const fullSizeImage = popupWithFullSizeImage.querySelector('.fullsize-image__image').src;
            
        const fullSizeImageTitle = popupWithFullSizeImage.querySelector('.fullsize-image__title').textContent;
            
        fullSizeImage.setAttribute('src', link);
        fullSizeImageTitle.textContent = name;
        fullSizeImage.setAttribute('alt', name);
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

//Оригинал класса попапа:

export class Popup {
    constructor (popup){
        this._popup = popup;
    }

    openPopup(popupSelector){
        popupSelector.classList.add('popup_open');
        document.addEventListener('keydown', this._closePopupWithEsc);
        this._closePopupWithOverlayClick(popupSelector);
        console.log('openPopup works!', popupSelector);
    };

    closePopup(popupSelector){
        popupSelector.classList.remove('popup_open');
        document.removeEventListener('keydown', this._closePopupWithEsc);
        console.log('closePopup works!');
    }

    _closePopupWithEsc(event){
        const popupOpen = document.querySelector('.popup_open');
        if (event.key === 'Escape'){
            this.closePopup(popupOpen);
            console.log('_closePopupWithEsc works!');
        }; 
    }

    _closePopupWithOverlayClick(popupSelector){
        popupSelector.addEventListener('click', (event)=>{
            if (event.target.classList.contains('popup__overlay') 
            || event.target.classList.contains('popup__button-close')){
                this.closePopup(popupSelector);
            }
            console.log('_closePopupWithOverlayClick works!');
        }); 
    };

    setEventListeners(openButton, closeButton){
        openButton.addEventListener('click', ()=>{this.openPopup(this._popup)});
        closeButton.addEventListener('click', ()=>{this.closePopup(this._popup)});
        console.log('setEventListeners works!');
    }
}

