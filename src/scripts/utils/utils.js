//Функция: устанавливаем слушатели событий на кнопки форм
export function setButtonListeners(button, saveButton, newPopupClass){
    button.addEventListener('click', ()=> {newPopupClass.openPopup()});
    saveButton.addEventListener('click', ()=> {newPopupClass.setEventListeners()});
}

export function setEditProfileButtonListeners(button, saveButton, newPopupClass, NewUserConst, formInputName, formInputJob){
    button.addEventListener('click', ()=> {
        newPopupClass.openPopup();
        NewUserConst.getUserInfo(formInputName, formInputJob);
    });
    saveButton.addEventListener('click', ()=> {
        newPopupClass.setEventListeners();       
    });
};

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

/*export function editUserProfile(PopupClass, UserClass, name, job){
        const editUserInfo = new UserClass(name, job);
        editUserInfo.setUserInfo();
        PopupClass.closePopup();
}; */
