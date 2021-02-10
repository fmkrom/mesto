export function enableOpenPopupButton(button, popupClass, submitButton, settings){
    button.addEventListener('click', ()=>{
        popupClass.openPopup();
        submitButton.classList.add(settings.inactiveButtonClass);
        submitButton.disabled = true
    })
};






/*export function createNewCard(cardData, cardClass, apiClass, 
                       popupFullSizeImageClass, 
                       popupDeleteCard, selectors){
    const currentCard = new cardClass({
        cardData,
        confirmCardOwner:()=>{
            apiClass.getUser()
            .then(userData =>{currentCard.showDeleteButton(currentCard, userData.id)}
            ).catch(err => console.log(`Ошибка подтверждения владельца карточки: ${err}`));
        },
        
        handleCardClick:()=>{popupFullSizeImageClass.openFullSizeImage(data.name, data.link)
        },
        
        handleLikeCard:()=>{
            apiClass.likeCard(currentCard.cardId(), !currentCard.confirmLikeStatus())
            .then(newCardData =>{currentCard.updateLikesCount(newCardData)
            }).catch(err => console.log(`Ошибка лайка карточки: ${err}`))
        },   

        handleDeleteCard: (cardData) => {
            popupDeleteCard.openPopup();
            popupDeleteCard.handleConfirmDeletingCard(()=>{
                popupDeleteCard.changeButtonText(true);
                apiClass.deleteCard(cardData._id)
                .then(()=> {currentCard.deleteCurrentCard(currentCard);
                popupDeleteCard.closePopup()})
                .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
                .finally(() => popupDeleteCard.changeButtonText(false));
            })
        }
    }, selectors.template), return currentCard.generateCard();
}; 
*/

/*
function createNewCard(cardData, cardClass, apiClass, 
                       popupFullSizeImageClass, 
                       popupDeleteCard, selectors){
    
    const currentCard = new cardClass({
        cardData,
        confirmCardOwner:()=>{
            apiClass.getUser()
            .then(userData =>{currentCard.showDeleteButton(currentCard, userData.id)}
            ).catch(err => console.log(`Ошибка подтверждения владельца карточки: ${err}`));
        },
        
        handleCardClick:()=>{popupFullSizeImageClass.openFullSizeImage(data.name, data.link)
        },
        
        handleLikeCard:()=>{
            apiClass.likeCard(currentCard.cardId(), !currentCard.confirmLikeStatus())
            .then(newCardData =>{currentCard.updateLikesCount(newCardData)
            }).catch(err => console.log(`Ошибка лайка карточки: ${err}`))
        },   

        handleDeleteCard: (cardData) => {
            popupDeleteCard.openPopup();
            popupDeleteCard.handleConfirmDeletingCard(()=>{
                popupDeleteCard.changeButtonText(true);
                apiClass.deleteCard(cardData._id)
                .then(()=> {currentCard.deleteCurrentCard(currentCard);
                popupDeleteCard.closePopup()})
                .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
                .finally(() => popupDeleteCard.changeButtonText(false));
            })
        }
    }, selectors.template),
    return currentCard.generateCard();
};
*/




/*=========================================================================================*/
/*
export function enableOpenPopupButton(button, popupClass, submitButton, settings){
    button.addEventListener('click', ()=>{
        popupClass.openPopup();
        submitButton.classList.add(settings.inactiveButtonClass);
        submitButton.disabled = true
    })
};

function confirmCardOwner(currentCard, userId, ownerId){
    const currentDeleteButton = currentCard.querySelector('.card__delete-button');
    if (userId === ownerId){
        currentDeleteButton.style.display = "block";
    }
};

function createLikesSet(dataArray, currentSet){
    dataArray.likes.forEach(item => {currentSet.add(item._id)});
    //console.log(currentSet);
};

function toggleLikeButtonState(currentSet, currentUserId, button){
    if (!currentSet.has(currentUserId)){
        currentSet.add(currentUserId);
        button.classList.remove('card__like-button_inactive');
        button.classList.add('card__like-button_active');
    } else if (currentSet.has(currentUserId)){
        currentSet.delete(currentUserId);
        button.classList.remove('card__like-button_active');
        button.classList.add('card__like-button_inactive');
    }
};

function toggleLikeButton(currentCard, currentSet, dataArray, currentUserId){
    createLikesSet(dataArray, currentSet)
    const likeButton = currentCard.querySelector('.card__like-button');
    likeButton.addEventListener('click', ()=>{
        toggleLikeButtonState(currentSet, currentUserId, likeButton);
    })
};

export function createNewestCard(CardClass, data,
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
            openFullSizeImage(PopupFullSizeImageClass, data.name, data.link);
            console.log('This is data of a card I wanna like:', data);
        },
        handleDeleteCard:()=>{
            PopupConfirmDeletingClass.openPopup();
            const confirmButton = PopupConfirmDeletingClass.handleConfirmDeletingCard();
            confirmButton.addEventListener('click',()=>{
                apiClass.deleteCard(data._id).then((data)=>{
                    console.log(data);
                    PopupConfirmDeletingClass.closePopup();
                }).catch((err) => console.log(err));
            });
        },
        handleLikeCard:()=>{
            apiClass.likeCard(data._id).then((currentData)=>{
                apiClass.getUserData().then((user) =>{
                    toggleLikeButton(cardElement, likesSet, currentData, user._id);
                }).catch((err) => console.log(err));
            }).catch((err) => console.log(err));
        }
        handleDislikeCard:()=>{            
            apiClass.dislikeCard(data._id).then((currentData)=>{
                apiClass.getUserData().then((user) =>{
                    toggleLikeButton(cardElement, currentData, user._id);
                }).catch((err) => console.log(err));
            }).catch((err) => console.log(err));
        
    },
    '.template');
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
};*/