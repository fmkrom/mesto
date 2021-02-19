export class Card {
    constructor({data, userId, handleDeleteCard, handleCardClick, handleLikeCard}, 
                templateSelector){
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._ownerId = data.owner._id;
<<<<<<< HEAD
=======
        this._template = templateSelector;
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
        
        this._userId = userId;
        
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

<<<<<<< HEAD
    showDeleteButton(){
        const currentDeleteButton = this._element.querySelector('.card__delete-button');
        if (this._userId === this._ownerId){
            currentDeleteButton.style.display = "block";
        } 
    };

    setLikeCount(){
        const likesNumber = this._element.querySelector('.card__like-number');
        likesNumber.textContent = this._likes.length;
    }

    showInactiveLikeButton(){
        const likeButton = this._element.querySelector('.card__like-button');
        likeButton.classList.remove('card__like-button_active');
        likeButton.classList.add('card__like-button_inactive');
    }

    showActiveLikeButton(){
        const likeButton = this._element.querySelector('.card__like-button');
        likeButton.classList.add('card__like-button_active');
        likeButton.classList.remove('card__like-button_inactive');
    }

    confirmLikeStatus(){
        const likesSet = new Set;
        this._likes.forEach((item)=>{likesSet.add(item._id)});
        const cardIsLiked = likesSet.has(this._userId);
        return cardIsLiked;
    };

    toggleLikeButton(){
        const currentLikeStatus = this.confirmLikeStatus();
=======
    showDeleteButton(userId){
        const currentDeleteButton = this._element.querySelector('.card__delete-button');
        if (userId === this._ownerId){
            currentDeleteButton.style.display = "block";
        } 
    };

    setLikeCount(){
        const likesNumber = this._element.querySelector('.card__like-number');
        likesNumber.textContent = this._likes.length;
    }

    showInactiveLikeButton(){
        const likeButton = this._element.querySelector('.card__like-button');
        likeButton.classList.remove('card__like-button_active');
        likeButton.classList.add('card__like-button_inactive');
    }

    showActiveLikeButton(){
        const likeButton = this._element.querySelector('.card__like-button');
        likeButton.classList.add('card__like-button_active');
        likeButton.classList.remove('card__like-button_inactive');
    }

    confirmLikeStatus(userId){
        const likesSet = new Set;
        this._likes.forEach((item)=>{likesSet.add(item._id)});
        const cardIsLiked = likesSet.has(userId);
        return cardIsLiked;
    };

    setLikeButton(userId){
        const currentLikeStatus = this.confirmLikeStatus(userId);
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
        if (currentLikeStatus === true){
            this.showActiveLikeButton();
        } else if (currentLikeStatus === false){
            this.showInactiveLikeButton();
        }
    }

<<<<<<< HEAD
=======
    toggleLikeButton(likeStatus){
        if (likeStatus === true){
            this.showActiveLikeButton();
        } else if (likeStatus === false){
            this.showInactiveLikeButton();
        }
    }

>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
    updateLikesCount(data){
        this._likes = data.likes;
        const likesNumber = this._element.querySelector('.card__like-number');
        likesNumber.textContent = data.likes.length;   
<<<<<<< HEAD
        this.toggleLikeButton();
=======
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
    }

    deleteCurrentCard(){
        this._element.remove();
        this._element = null;
    }

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
<<<<<<< HEAD
        this.showDeleteButton();
        this.toggleLikeButton();
=======
        this.confirmCardOwner();
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
        this.setLikeCount();
        this.setEventListeners();
        
        const generatedCardImage = this._element.querySelector('.card__image');
        generatedCardImage.src=this._link;
        generatedCardImage.alt=this._name;
        this._element.querySelector('.card__title').textContent=this._name;

        return this._element;
    }
};