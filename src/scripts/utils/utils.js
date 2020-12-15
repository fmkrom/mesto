export function confirmDeletingCard(CardClass, currentCard){
    CardClass.handleDeleteCard(currentCard);
};

export function createNewCard(CardClass, cardName, cardLink, cardLikes,
                              PopupFullSizeImageClass,
                              NewSectionClass,
                              PopupConfirmDeletingClass){
    const currentCard = new CardClass({
        name: cardName,
        link: cardLink,
        likes: cardLikes,
            handleDeleteCard:()=>{
                    console.log('This is basicCardClass in handleDeleteCard: ', CardClass);
                    console.log('This is cuurentCard in handleDeleteCard:', currentCard);
                PopupConfirmDeletingClass.openPopup();
                PopupConfirmDeletingClass.handleConfirmDeletingCard(CardClass, currentCard);
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

/*export function createNewServerCard(CardClass, 
                              cardName, 
                              cardLink,
                              cardLikes, 
                              NewPopupClass,
                              NewSectionClass){
    const serverCard = new CardClass({
                    name: cardName,
                    link: cardLink, 
                    likes: cardLikes,
                    handleCardClick: ()=>{openFullSizeImage(NewPopupClass, cardName, cardLink)},
    }, '.template');
    const cardElement = serverCard.generateCard();
    NewSectionClass.addItem(cardElement);
};*/
/*
export function createMyNewCard(MyCardClass, 
                                cardName, cardLink, cardLikes, 
                                NewPopupClass, NewSectionClass, PopupConfirmClass){
        const myCard = new MyCardClass({
            name: cardName,
            link: cardLink,
            likes: cardLikes, 
                    handleCardClick: ()=>{openFullSizeImage(NewPopupClass, cardName, cardLink)},
                    handleDeleteCard: ()=>{
                        PopupConfirmClass.openPopup();
                        PopupConfirmClass.setEventListeners(myCard);
                    }
        }, '.template');
        const cardElement = myCard.generateCard();
    NewSectionClass.addItem(cardElement);
};*/