import {PopupWithFullSizeImage} from "../components/PopupWithFullSizeImage.js";
import {popupFullsizeImage} from "../utils/constants.js";

export class Card {
    constructor({name, link, handleCardClick}, templateSelector){
        this._name = name;
        this._link = link;
        this._template = templateSelector;
        this.handleCardClick = handleCardClick;
    }
    
    _getCardTemplate(){
        const clonedTemplate = document.querySelector(this._template)
        .content.querySelector('.card').cloneNode(true);
        return clonedTemplate;
    }

    _likeCard=(button)=>{
        button.classList.toggle('card__like-button');
        button.classList.toggle('card__like-button_active');
    };

    _deleteCard=(element)=>{
        element.remove();
        element = null;
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
        deleteButton.addEventListener('click', ()=> this._deleteCard(this._element));
                        
        const openFullsizeImageLink = this._element.querySelector('.card__open-fullsize-image');
        
        openFullsizeImageLink.addEventListener('click', ()=>{this.handleCardClick()
        });
        
        return this._element;
    }

};
