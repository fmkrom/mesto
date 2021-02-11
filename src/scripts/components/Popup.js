export class Popup {
    constructor (popupSelector){
        this._popup = document.querySelector(`${popupSelector}`);
    }

    openPopup(){
        this._popup.classList.add('popup_open');
        document.addEventListener('keydown', this._closePopupWithEsc);
    };

    closePopup(){
        this._popup.classList.remove('popup_open');
        document.removeEventListener('keydown', this._closePopupWithEsc);
    }

    _closePopupWithEsc=(event)=>{
        if (event.key === 'Escape'){
            this.closePopup();
        }
    };

    _closePopupWithOverlayClick(){
        this._popup.addEventListener('click', (event)=>{
            if (event.target.classList.contains('popup__overlay') 
            || event.target.classList.contains('popup__button-close')){
                this.closePopup();
            }
        }); 
    };

    setEventListeners(){
        const popupCloseButton = this._popup.querySelector('.popup__button-close')
        popupCloseButton.addEventListener('click', ()=> {this.closePopup}); 
        this._closePopupWithOverlayClick();
    }
};




