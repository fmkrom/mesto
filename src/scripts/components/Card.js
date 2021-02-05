export class Card {
    constructor({data, handleDeleteCard, handleCardClick, handleLikeCard}, 
                templateSelector){
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._userId = data.currentUserId;

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
        if (this._likes.find(item => item._id === this._ownerId)){
            console.log('confirmLikeStatus - card is liked!');
            return true 
        } else {
            return false
        }
    };

    cardId(){
        return this._cardId;
    }

    toggleLikeButton(){
        const likeButton = this._element.querySelector('.card__like-button');
        
        if (this.confirmLikeStatus()){
            likeButton.classList.add('card__like-button_active');
        } else (!this.confirmLikeStatus())
            likeButton.classList.remove('card__like-button_active');
    }

    setLikesCount(){
        const likesNumber = this._element.querySelector('.card__like-number');
        likesNumber.textContent = this._likes.length;
        toggleLikeButton();
    };

    updateLikesCount(data){
        this._likes = data._likes;
        setLikesCount();
    }

    showDeleteButton(){
        const currentDeleteButton = this._element.querySelector('.card__delete-button');
        if (this._userId === this._ownerId){
            currentDeleteButton.style.display = "block";
        }
    };

    deleteCurrentCard(){
        this._element.remove();
        this._element = null;
    };

    setEventListeners(){
        const deleteButton = this._element.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', ()=>{this.handleDeleteCard()});

        const likeButton = this._element.querySelector('.card__like-button');
        likeButton.addEventListener('click', ()=> {this.handleLikeCard()});

        const openFullsizeImageLink = this._element.querySelector('.card__open-fullsize-image');
        openFullsizeImageLink.addEventListener('click', ()=>{this.handleCardClick()});
    }

    generateCard(){
        this._element = this._getCardTemplate();
        this.updateLikesCount();
        this.setEventListeners()
        this.showDeleteButton();
        
        const generatedCardImage = this._element.querySelector('.card__image');
        generatedCardImage.src=this._link;
        generatedCardImage.alt=this._name;
        this._element.querySelector('.card__title').textContent=this._name;

        return this._element;
    }
};
