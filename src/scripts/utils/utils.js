function openFullSizeImage(NewPopupClass, cardName, cardLink){
    NewPopupClass.openFullSizeImage(cardName, cardLink);
    NewPopupClass.setEventListeners();
};

export function createNewCard(CardClass, 
                              cardName, 
                              cardLink, 
                              NewPopupClass,
                              NewSectionClass){
    const card = new CardClass({
        name: cardName,
        link: cardLink, 
        handleCardClick: ()=>{openFullSizeImage(NewPopupClass, cardName, cardLink)}
    }, '.template');
    const cardElement = card.generateCard();
    NewSectionClass.addItem(cardElement);
};
    
export function createNewSection(SectionClass, array, CardClass, NewPopupClass){
        const newCardsSection = new SectionClass(
            {items: array,
            renderer: (item) =>{
                  createNewCard(CardClass, 
                          item.name, 
                          item.link, 
                          NewPopupClass,
                          newCardsSection)}
            }, '.cards');
        newCardsSection.renderItems();
};

export function setUserDataOnPage(data, pageName, pageJob, pageAvatar){
    pageName.textContent = data.name; 
    pageJob.textContent = data.about;
    pageAvatar.src = data.avatar;
};

