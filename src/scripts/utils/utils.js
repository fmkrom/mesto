export function enableOpenPopupButton(button, popupClass, submitButton, settings){
    button.addEventListener('click', ()=>{
        popupClass.openPopup();
        submitButton.classList.add(settings.inactiveButtonClass);
        submitButton.disabled = true
    })
};

export function enableButtonOpenPopupEditProfile(button, userInfoClass, formName, formAbout, popupClass, 
                                                 submitButton, settings){
  button.addEventListener('click', ()=>{
    popupClass.openPopup();
    formName.value = userInfoClass.getUserInfo().userName;
    formAbout.value = userInfoClass.getUserInfo().userAbout;
    submitButton.classList.add(settings.inactiveButtonClass);
    submitButton.disabled = true
  })
};

/*
export function createCard(cardData, userID, cardClass, apiClass, openedPopupWithFullSizeImageClass, popupConfirmDeletingCardClass, templateSelector){
  const currentCard = new cardClass({
    data: cardData,
    userId: userID,
    handleCardClick:()=>{
        console.log(userId);
        openedPopupWithFullSizeImageClass.
        openFullSizeImage(cardData.name, cardData.link);
    },
    handleLikeCard:()=>{
        const currentLikeStatus = !currentCard.confirmLikeStatus(userId);
        apiClass.likeCard(cardData._id, currentLikeStatus)
        .then(currentCardData =>{
          console.log(`current Like status in createNewCard: ${currentLikeStatus}`);
          currentCard.updateLikesCount(currentCardData);
          console.log('Лайк карточки успешно поставлен', currentCardData.likes);
        })
        .catch(err => console.log(`Ошибка лайка карточки: ${err}`))
    },
    handleDeleteCard: () =>{
      popupConfirmDeletingCardClass.openPopup();
      const deleteButton = popupConfirmDeletingCardClass.handleConfirmDeletingCard();
      deleteButton.addEventListener('click',()=>{
           popupConfirmDeletingCardClass.changeButtonText(true);
           apiClass.deleteCard(cardData._id)
           .then(()=> {currentCard.deleteCurrentCard(currentCard);
                       popupConfirmDeletingCardClass.closePopup()})
           .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
           .finally(() => {popupConfirmDeletingCardClass.changeButtonText(false)
            //console.log('Card deleted sucesfully!')
          });
      })
    }
  }, templateSelector)
  return currentCard.generateCard();
};
*/