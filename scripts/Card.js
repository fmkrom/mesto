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
cardsDataArray.initialCards.forEach((item) => {
    const card = new Card(item.name, item.link);
    const cardElement = card.generateCard();
    document.querySelector('.cards').prepend(cardElement);
}); 

console.log(document.querySelector('.cards'));
*/







/*===*/

/*
//Функция добавления базовых карточек
function getCard(arrayItem){

    //Клонируюем темплату
    const clonedTemplate = cardTemplate.cloneNode(true);
    
    //Внутри темплаты: кнопка удаления карточки:
    const templateDeleteButton = clonedTemplate.querySelector('.card__delete-button');

    //Внутри темплаты: кнопка лайка карточки
    const templateLikeButton = clonedTemplate.querySelector('.card__like-button');

    //Внутри темплаты: переменная для открытия полноэкранного изображения
    const templateImageFullSize = clonedTemplate.querySelector('.card__open-fullsize-image');

    const templateImage = clonedTemplate.querySelector('.card__image');

    //Наполнение темплаты содежимым
    templateImage.src=arrayItem.link;
    clonedTemplate.querySelector('.card__title').textContent=arrayItem.name;
    templateImage.alt=arrayItem.name;

    //Привязываем ее к кнопке "Удалить" функцию удаления карточки
    templateDeleteButton.addEventListener('click', deleteCard);

    //Функция лайка карточки. Привязываем ее к кнопке
    templateLikeButton.addEventListener('click', likeCard);

    //Функция открытия полномасштабного изображения
    templateImageFullSize.addEventListener('click', openFullSizeImage);

    //Возвращаем результат работы функции: клонированная темплата с содержимым:
    return clonedTemplate;
};
*/
//Функция-рендерер
/*ВАЖНО! В ней arrayItem - переменная элементов массива, связывающая воедино две этих функции
function renderCards(arrayItem){
    cardsNode.prepend(getCard(arrayItem));
};

//Вызываем функцию-рендерер и применяем к массиву карточек
initialCards.forEach(renderCards);*/