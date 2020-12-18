export class Card {
    constructor({data, showDeleteButton, handleDeleteCard, handleCardClick, handleLikeCard}, 
                templateSelector){
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._owner = data.owner._id;
        this._template = templateSelector;
        this.showDeleteButton = showDeleteButton;
        this.handleDeleteCard = handleDeleteCard;
        this.handleCardClick = handleCardClick;
        this.handleLikeCard = handleLikeCard;
        this.handleDislikeCard = handleLikeCard;
    }
    
    _getCardTemplate(){
        const clonedTemplate = document.querySelector(this._template)
        .content.querySelector('.card').cloneNode(true);
        return clonedTemplate;
    }

    deleteCurrentCard(element){
        console.log('This is element form _deleteCard method:', element);
        element.remove();
        element = null;
    };

    generateCard(){
        this._element = this._getCardTemplate();

        this.showDeleteButton(this._element);

        const generatedCardImage = this._element.querySelector('.card__image');
        generatedCardImage.src=this._link;
        generatedCardImage.alt=this._name;
        this._element.querySelector('.card__title').textContent=this._name;

        const deleteButton = this._element.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', ()=>{
            this.handleDeleteCard();
        });
    
        const likesNumber = this._element.querySelector('.card__like-number');
        likesNumber.textContent = this._likes.length;

        const likeButton = this._element.querySelector('.card__like-button');
        likeButton.addEventListener('click', ()=> {
            this.handleLikeCard();
        });

        const openFullsizeImageLink = this._element.querySelector('.card__open-fullsize-image');
        openFullsizeImageLink.addEventListener('click', ()=>{
            this.handleCardClick();
        });
        
        return this._element;
    }
};

