import {deleteCard} from "./index.js";
import {likeCard} from "./index.js";
import {openFullSizeImage} from "./index.js";

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

    generateCard(){

        this._element = this._getCardTemplate();

        this._element.querySelector('.card__image').src=this._link;
        this._element.querySelector('.card__image').alt=this._name;
        this._element.querySelector('.card__title').textContent=this._name;

        //Слушатели событий функций:
        this._element.querySelector('.card__delete-button').addEventListener('click', deleteCard);
        this._element.querySelector('.card__like-button').addEventListener('click', likeCard);
        this._element.querySelector('.card__open-fullsize-image').addEventListener('click', openFullSizeImage);

        return this._element;
    }

};

export default Card;

/*
function renderCards(arrayItem){
    cardsNode.prepend(getCard(arrayItem));
*/