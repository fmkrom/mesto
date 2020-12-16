export class Card {
    constructor({name, 
                link, 
                likes,
                handleDeleteCard}, 
                templateSelector){
        this._name = name;
        this._link = link;
        this._likes = likes;
        this._template = templateSelector;
        this.handleDeleteCard = handleDeleteCard;
    }
    
    _getCardTemplate(){
        const clonedTemplate = document.querySelector(this._template)
        .content.querySelector('.card').cloneNode(true);
        return clonedTemplate;
    }

    _handleCardClick(PopupFullSizeImageClass){
        PopupFullSizeImageClass.openFullSizeImage(this._name, this._link);
        PopupFullSizeImageClass.setEventListeners();
    }
  
    _handleLikeCard(button, number){
        button.classList.toggle('card__like-button');
        button.classList.toggle('card__like-button_active');
        number.textContent = this._likes.length + 1;
    };

    _deleteCard(element){
        console.log('This is element form _deleteCard method:', element);
        element.remove();
        element = null;
    };

    generateCard(PopupFullSizeImageClass){
            
            this._element = this._getCardTemplate();
            
            const generatedCardImage = this._element.querySelector('.card__image');
            generatedCardImage.src=this._link;
            generatedCardImage.alt=this._name;
            this._element.querySelector('.card__title').textContent=this._name;

            const deleteButton = this._element.querySelector('.card__delete-button');
            deleteButton.addEventListener('click', ()=>{
                this.handleDeleteCard(this._element);
            });
    
            const likesNumber = this._element.querySelector('.card__like-number');
            likesNumber.textContent = this._likes.length;

            const likeButton = this._element.querySelector('.card__like-button');
            likeButton.addEventListener('click', ()=> {
                this._handleLikeCard(likeButton, likesNumber)
            });

            //this.deleteCard(this._element);

            const openFullsizeImageLink = this._element.querySelector('.card__open-fullsize-image');
            openFullsizeImageLink.addEventListener('click', ()=>{
                this._handleCardClick(PopupFullSizeImageClass);
            });
        
        return this._element;
    }
};

