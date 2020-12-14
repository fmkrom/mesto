function openFullSizeImage(NewPopupClass, cardName, cardLink){
    NewPopupClass.openFullSizeImage(cardName, cardLink);
    NewPopupClass.setEventListeners();
};

export function createNewCard(CardClass, 
                              cardName, 
                              cardLink, 
                              NewPopupClass,
                              NewSectionClass,
                              PopupConfirmClass){
    const card = new CardClass({
        name: cardName,
        link: cardLink, 
        handleCardClick: ()=>{openFullSizeImage(NewPopupClass, cardName, cardLink)},
        handleDeleteCard: ()=>{
                        PopupConfirmClass.openPopup();
                        PopupConfirmClass.setEventListeners(card);
                    }
    }, '.template');
    const cardElement = card.generateCard();
    NewSectionClass.addItem(cardElement);
};



export function confirmDeletingCard(PopupConfirmClass, 
                                    popupConfirmButton,
                                    cardConst){
        PopupConfirmClass.openPopup();
        popupConfirmButton.addEventListener('click', ()=> {
        cardConst.handleDeleteCard(cardConst);
    });
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

export function createNewServerCard(CardClass, 
    cardName, 
    cardLink,
    cardLikes, 
    NewPopupClass,
    NewSectionClass,
    PopupConfirmClass){
        const card = new CardClass({
            name: cardName,
            link: cardLink,
            likes: cardLikes, 
                    handleCardClick: ()=>{openFullSizeImage(NewPopupClass, cardName, cardLink)},
                    handleDeleteCard: ()=>{
                    PopupConfirmClass.openPopup();
                    PopupConfirmClass.setEventListeners(card);
                    }
            }, '.template');
            const cardElement = card.generateCard();
            NewSectionClass.addItem(cardElement);
};