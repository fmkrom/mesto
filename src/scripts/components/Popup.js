export class Popup {
    constructor (popup){
        this._popup = popup;
    }

    openPopup(){
        this._popup.classList.add('popup_open');
        this._closePopupWithOverlayClick();
        //console.log('new version - class Popup: openPopup works!');
    };

    closePopup(){
        this._popup.classList.remove('popup_open');
        //console.log('new version - class Popup: closePopup works!');
    }

    //Важно! В новой версии все работает норм, но не работает закрытие по Esc - это нужно исправить!!
    _closePopupWithEsc=(event)=>{
        if (event.key === 'Escape'){
            this.closePopup();
        }
        console.log(event.key);
    };

    _closePopupWithOverlayClick(){
        this._popup.addEventListener('click', (event)=>{
            if (event.target.classList.contains('popup__overlay') 
            || event.target.classList.contains('popup__button-close')){
                this.closePopup();
            }
            //console.log('new version - class Popup: _closePopupWithOverlayClick works!');
        }); 
    };

    setEventListeners(){
        this._popup.querySelector('.popup__button-close')
        .addEventListener('click', ()=> {this.closePopup(this._popup)}); 
        document.addEventListener('keydown', this._closePopupWithEsc);
        //console.log('new version - class Popup: setEventListeners works!');
    }
}

