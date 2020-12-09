

export function createNewCard(CardClass, 
                              cardName, 
                              cardLink, 
                              PopupImageClass, 
                              popupConst, 
                              container){
    const card = new CardClass({
        name: cardName,
        link: cardLink, 
        handleCardClick: ()=>{
            const openedPopupWithFullSizeImage = new PopupImageClass(popupConst);
            openedPopupWithFullSizeImage.openFullSizeImage(cardName, cardLink);
            openedPopupWithFullSizeImage.setEventListeners();
        }
    }, '.template');
    const cardElement = card.generateCard();
    container.addItem(cardElement);
};

export function setUserDataOnPage(data, pageName, pageJob, pageAvatar){
    pageName.textContent = data.name; 
    pageJob.textContent = data.about;
    pageAvatar.src = data.avatar;
}
