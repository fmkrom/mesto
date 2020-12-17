export function openFullSizeImage(PopupFullSizeImageClass, cardName, cardLink){
    PopupFullSizeImageClass.openFullSizeImage(cardName, cardLink);
    PopupFullSizeImageClass.setEventListeners();
};

export function confirmDeletingCard(popupWithButton, currentCard, currentCardId){
    popupWithButton.openPopup();
    console.log(popupWithButton);
    const confirmDeletingButton = popupWithButton.querySelector('.form__button-save');
    confirmDeletingButton.addEventListener('click', ()=>{
        currentCard.deleteCard(currentCardId);
        popupWithButton.closePopup();
    })
};

export function confirmCardOwner(currentCard, userId, ownerId){
    const currentDeleteButton = currentCard.querySelector('.card__delete-button');
    if (userId === ownerId){
        currentDeleteButton.style.display = "block";
    }
};

export function createNewCard(CardClass, data,
                              PopupFullSizeImageClass, NewSectionClass,
                              PopupConfirmDeletingClass, apiClass){
//console.log('This is CreateNewCard in utils: ', data, data.name, data.link, data.likes);
const currentCard = new CardClass({data,
        showDeleteButton:(currentElement)=>{
            apiClass.getUserData().then((user) =>{
                confirmCardOwner(currentElement, user._id, data.owner._id);
            }).catch((err) => console.log(err));
        },
        handleCardClick:()=>{
            openFullSizeImage(PopupFullSizeImageClass, data.name, data.link)
            //console.log('This is card owner info from CreateNewCard function:', data.owner._id);
            console.log('This is card owner info from CreateNewCard function:', data, data._id);
        },
        handleDeleteCard:()=>{
            console.log(PopupConfirmDeletingClass);
                apiClass.deleteCard(data._id).then((cardId)=>{
                    PopupConfirmDeletingClass.handleConfirmDeletingCard(currentCard, cardId);
            }).catch((err) => console.log(err));
        },
        handleLikeCard:()=>{
            apiClass.likeCard(data._id);
            return data.likes + 1;
        }
    }, '.template');
    const cardElement = currentCard.generateCard(PopupFullSizeImageClass);
    NewSectionClass.addItem(cardElement);
};

export function setUserDataOnPage(data, pageName, pageJob, pageAvatar){
    pageName.textContent = data.name; 
    pageJob.textContent = data.about;
    pageAvatar.src = data.avatar;
};

export function updateAvatarOnPage(url){
    const avatarOnPage = document.querySelector('.profile__image');
    avatarOnPage.src = url;
};