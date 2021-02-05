export class Card {
    constructor({data, handleDeleteCard, handleCardClick, handleLikeCard}, 
                templateSelector){
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._userId = data.userId;

        this._template = templateSelector;
        this.handleDeleteCard = handleDeleteCard;
        this.handleCardClick = handleCardClick;
        this.handleLikeCard = handleLikeCard;
    }
    
    _getCardTemplate(){
        const clonedTemplate = document.querySelector(this._template)
        .content.querySelector('.card').cloneNode(true);
        return clonedTemplate;
    }

    confirmLikeStatus(){
        /*Исходный вариант функции: 
        return Boolean(this._likes.find(item => item._id === this._ownerId));*/
        
        if (this._likes.find(item => item._id === this._ownerId)){
            console.log('confirmLikeStatus - card is liked!');
            return true 
        } else {
            return false
        }
    };

    toggleLikeButton(element){
        const likeButton = element.querySelector('.card__like-button');
        if (this.confirmLikeStatus()){
            likeButton.classList.add('card__like-button_active');
        } else (!this.confirmLikeStatus())
            likeButton.classList.remove('card__like-button_active');
    }

    setLikesCount(element){
        const likesNumber = element.querySelector('.card__like-number');
        likesNumber.textContent = this._likes.length;
        toggleLikeButton(element);
    };

    updateLikesCount(data, element){
        this._likes = data._likes;
        setLikesCount(element);
    }

    showDeleteButton(element){
        const currentDeleteButton = element.querySelector('.card__delete-button');
        if (this._userId === this._ownerId){
            currentDeleteButton.style.display = "block";
        }
    };

    deleteCurrentCard(element){
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

        getLikesCount(this._element);
    
        /*const likesNumber = this._element.querySelector('.card__like-number');
        likesNumber.textContent = this._likes.length;*/

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

