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

export function addCardsToContainer(array, SectionClass, CardClass){
        const newCardsContainer = new SectionClass(
        {items: array,
          renderer: (item) =>{
            const card = new CardClass({
                name: item.name,
                link: item.link,
                handleCardClick: ()=>{
                        const openedPopupWithFullSizeImage = new PopupWithFullSizeImage(popupFullsizeImage);
                        openedPopupWithFullSizeImage.openFullSizeImage(item.name, item.link);
                }
            });
             const cardElement = card.generateCard();
             newCardsContainer.addItem(cardElement);
         }
        }, '.cards');
        newCardsContainer.renderItems();
};


