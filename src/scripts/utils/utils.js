export function openFullSizeImage(PopupFullSizeImageClass, cardName, cardLink){
    PopupFullSizeImageClass.openFullSizeImage(cardName, cardLink);
    PopupFullSizeImageClass.setEventListeners();
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
            apiClass.likeCard(data._id).then((data)=>{
                console.log(data, data.likes.length);
            }).catch((err) => console.log(err));
        },
        handleDislikeCard:()=>{            
            apiClass.dislikeCard(data._id).then((data)=>{
                console.log(data.likes.length);
            }).catch((err) => console.log(err));
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