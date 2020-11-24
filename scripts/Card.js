import {openFullSizeImage} from "./utils.js";

class Card {
    constructor(name, link){
        this._name = name;
        this._link = link;
    }

    _getCardTemplate(){
        const clonedTemplate = document
        .querySelector('.template').content
        .cloneNode(true);

        return clonedTemplate;
    }

    _likeCard(){
        this._element = this._getCardTemplate();
        const likeButton = this._element.querySelector('.card__like-button');

        likeButton.classList.toggle('card__like-button');
        likeButton.classList.toggle('card__like-button_active');
    };

    _deleteCard(event){
        event.target.closest('.card').remove();
    };
    
    generateCard(){
        
        this._element = this._getCardTemplate();

        const generatedCardImage = this._element.querySelector('.card__image');
        generatedCardImage.src=this._link;
        generatedCardImage.alt=this._name;
        this._element.querySelector('.card__title').textContent=this._name;

        //Слушатели событий функций:
        this._element.querySelector('.card__delete-button').addEventListener('click', this._deleteCard);
        this._element.querySelector('.card__like-button').addEventListener('click', this._likeCard);
        this._element.querySelector('.card__open-fullsize-image').addEventListener('click', openFullSizeImage);

        return this._element;
    }

};

export default Card;