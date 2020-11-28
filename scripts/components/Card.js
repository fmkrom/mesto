import {openFullSizeImage} from "../utils/utils.js";

export class Card {
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

    _likeCard=(button)=>{
        button.classList.toggle('card__like-button');
        button.classList.toggle('card__like-button_active');
    };

    _deleteCard=(button)=>{
        const cardElement = button.closest('.card');
        cardElement.remove();
    };

    generateCard(){
        
        this._element = this._getCardTemplate();
        
        const generatedCardImage = this._element.querySelector('.card__image');
        generatedCardImage.src=this._link;
        generatedCardImage.alt=this._name;
        this._element.querySelector('.card__title').textContent=this._name;
 
        const likeButton = this._element.querySelector('.card__like-button');
        likeButton.addEventListener('click', ()=> this._likeCard(likeButton));

        const deleteButton = this._element.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', ()=> this._deleteCard(deleteButton));
                        
        this._element.querySelector('.card__open-fullsize-image').addEventListener('click', openFullSizeImage);

        return this._element;
    }

};
