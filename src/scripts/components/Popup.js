export class Popup {
    constructor (popup){
        this._popup = popup;
    }

    openPopup(){
        this._popup.classList.add('popup_open');
        document.addEventListener('keydown', (event)=> {this._closePopupWithEsc(event)});
        this._closePopupWithOverlayClick();
        //console.log('new version - class Popup: openPopup works!');
    };

    closePopup(){
        this._popup.classList.remove('popup_open');
        document.removeEventListener('keydown', ()=> {this._closePopupWithEsc});
        //console.log('new version - class Popup: closePopup works!');
    }

    //Важно! В новой версии все работает норм, но не работает закрытие по Esc - это нужно исправить!!
    _closePopupWithEsc=(event)=>{
        const popupOpen = document.querySelector('.popup_open');
        if (event.key === 'Escape'){
            this.closePopup(popupOpen);
            //console.log('new version - class Popup: _closePopupWithEsc works!');
        }; 
    }

    _closePopupWithOverlayClick(){
        this._popup.addEventListener('click', (event)=>{
            if (event.target.classList.contains('popup__overlay') 
            || event.target.classList.contains('popup__button-close')){
                this.closePopup();
            }
            //console.log('new version - class Popup: _closePopupWithOverlayClick works!');
        }); 
    };

    setEventListeners(openButton, closeButton){
        openButton.addEventListener('click', ()=>{this.openPopup(this._popup)});
        closeButton.addEventListener('click', ()=>{this.closePopup(this._popup)});
        //console.log('new version - class Popup: setEventListeners works!');
    }
}
