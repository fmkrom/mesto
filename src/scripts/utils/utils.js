export function openFullSizeImage(PopupFullSizeImageClass, cardName, cardLink){
    PopupFullSizeImageClass.openFullSizeImage(cardName, cardLink);
    PopupFullSizeImageClass.setEventListeners();
};

export function confirmDeletingCard(CardClass, currentCard){
    CardClass.handleDeleteCard(currentCard);
};

export function 

export function createNewCard(CardClass, data,
                              PopupFullSizeImageClass, NewSectionClass,
                              PopupConfirmDeletingClass){
//console.log('This is CreateNewCard in utils: ', data, data.name, data.link, data.likes);
const currentCard = new CardClass({data,
        handleCardClick:()=>openFullSizeImage(PopupFullSizeImageClass, data.name, data.link),
        handleDeleteCard:()=>{console.log(PopupConfirmDeletingClass)},
        handleLikeCard:()=>{console.log(data.likes)}
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