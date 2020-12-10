function openFullSizeImage(NewPopupClass, cardName, cardLink){
    NewPopupClass.openFullSizeImage(cardName, cardLink);
    NewPopupClass.setEventListeners();
};

export function createNewCard(CardClass, 
                              cardName, 
                              cardLink, 
                              NewPopupClass,
                              container){
    const card = new CardClass({
        name: cardName,
        link: cardLink, 
        handleCardClick: ()=>{openFullSizeImage(NewPopupClass, cardName, cardLink)}
    }, '.template');
    const cardElement = card.generateCard();
    container.addItem(cardElement);
};