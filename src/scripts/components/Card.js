export class Card {
    constructor({data, confirmCardOwner, handleDeleteCard, handleCardClick, handleLikeCard}, 
                templateSelector){
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._owner = data.owner.name;
        this._ownerId = data.owner._id;
        this._ownerName = data.owner.name;
        this._template = templateSelector;
        
        this.confirmCardOwner = confirmCardOwner;
        this.handleDeleteCard = handleDeleteCard;
        this.handleCardClick = handleCardClick;
        this.handleLikeCard = handleLikeCard;
    }
    
    _getCardTemplate(){
        const clonedTemplate = document.querySelector(this._template)
        .content.querySelector('.card').cloneNode(true);
        return clonedTemplate;
    }

    showDeleteButton(userId){
        const currentDeleteButton = this._element.querySelector('.card__delete-button');
        if (userId === this._ownerId){
            currentDeleteButton.style.display = "block";
        } 
    };

    confirmLikeStatus(userId){
        const likesSet = new Set;
        this._likes.forEach((item)=>{likesSet.add(item._id)});
        const cardIsLiked = likesSet.has(userId);
        return cardIsLiked;
    };

    toggleLikeButton(status){
        //const currentLikeStatus = this.confirmLikeStatus();

        const currentLikeStatus = Boolean(status);

        const likesNumber = this._element.querySelector('.card__like-number');
        likesNumber.textContent = this._likes.length;
       
        const likeButton = this._element.querySelector('.card__like-button');
        if (currentLikeStatus === true){
            likeButton.style.background = "red";
            //likeButton.classList.add('card__like-button_active');
            //likeButton.classList.remove('card__like-button_inactive');
        } else {
            likeButton.style.background = "green";
            //likeButton.classList.remove('card__like-button_active');
            //likeButton.classList.add('card__like-button_inactive');
        }
    }

    updateLikesCount(data){
        this._likes = data.likes;
        this.toggleLikeButton();
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
        this.confirmCardOwner();
        //this.showDeleteButton();
        this.setEventListeners();
        this.toggleLikeButton();
        
        const generatedCardImage = this._element.querySelector('.card__image');
        generatedCardImage.src=this._link;
        generatedCardImage.alt=this._name;
        this._element.querySelector('.card__title').textContent=this._name;

        return this._element;
    }
};