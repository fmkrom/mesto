//Функция: устанавливаем слушатели событий на кнопки форм
export function setButtonListeners(button, saveButton, newPopupClass){
    button.addEventListener('click', ()=> {newPopupClass.openPopup()});
    saveButton.addEventListener('click', ()=> {newPopupClass.setEventListeners()});
}

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
        }
    }, '.template');
    const cardElement = card.generateCard();
    container.addItem(cardElement);
};
