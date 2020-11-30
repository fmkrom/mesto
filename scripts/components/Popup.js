export class Popup {
    constructor (popup){
        this._popup = popup;
    }

    openPopup(popupSelector){
        popupSelector.classList.add('popup_open');
        document.addEventListener('keydown', this._closePopupWithEsc);
        this._closePopupWithOverlayClick(popupSelector);
    };

    closePopup(popupSelector){
        popupSelector.classList.remove('popup_open');
        document.removeEventListener('keydown', this._closePopupWithEsc);
    }

    _closePopupWithEsc(event){
        const popupOpen = document.querySelector('.popup_open');
        if (event.key === 'Escape'){
            this.closePopup(popupOpen);
        }; 
    }

    _closePopupWithOverlayClick(popupSelector){
        popupSelector.addEventListener('click', (event)=>{
            if (event.target.classList.contains('popup__overlay') 
            || event.target.classList.contains('popup__button-close')){
                this.closePopup(popupSelector);
            }
        }); 
    };

    setEventListeners(openButton, closeButton){
        openButton.addEventListener('click', ()=>{this.openPopup(this._popup)});
        closeButton.addEventListener('click', ()=>{this.closePopup(this._popup)});
    }
}

