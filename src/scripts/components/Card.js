export class Card {
    constructor({name, link, likes, handleCardClick}, templateSelector){
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._template = templateSelector;
        this.handleCardClick = handleCardClick;
    }
    
    _getCardTemplate(){
        const clonedTemplate = document.querySelector(this._template)
        .content.querySelector('.card').cloneNode(true);
        return clonedTemplate;
    }

    _likeCard=(button, number)=>{
        button.classList.toggle('card__like-button');
        button.classList.toggle('card__like-button_active');
        number.textContent = this._likes.length + 1;
    };

    generateCard(){
            this._element = this._getCardTemplate();
            
            const generatedCardImage = this._element.querySelector('.card__image');
            generatedCardImage.src=this._link;
            generatedCardImage.alt=this._name;
            this._element.querySelector('.card__title').textContent=this._name;
    
            const likesNumber = this._element.querySelector('.card__like-number');
            likesNumber.textContent = this._likes.length;

            const likeButton = this._element.querySelector('.card__like-button');
            likeButton.addEventListener('click', ()=> this._likeCard(likeButton, likesNumber));

            const openFullsizeImageLink = this._element.querySelector('.card__open-fullsize-image');
            
            openFullsizeImageLink.addEventListener('click', ()=>{this.handleCardClick()
        });
        
        return this._element;
    }
};
