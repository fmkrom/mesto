export function enableOpenPopupButton(button, popupClass, submitButton, settings){
    button.addEventListener('click', ()=>{
        popupClass.openPopup();
        submitButton.classList.add(settings.inactiveButtonClass);
        submitButton.disabled = true
    })
};





const createCard = (cardData) => {
    const card = new Card({
      data: cardData,
      handleCardClick:()=>{
            openedPopupWithFullSizeImage.
            openFullSizeImage(cardData.name, cardData.link)
      },
      handleLikeCard:()=>{
          const currentLikeStatus = !card.confirmLikeStatus();
          api.likeCard(cardData._id, currentLikeStatus)
          .then(currentCardData =>{
            card.updateLikesCount(currentCardData);
            console.log('Card liked sucesfully', currentCardData.likes);
            })
        .catch(err => console.log(`Ошибка лайка карточки: ${err}`))
      },
      handleDeleteCard: () =>{
            popupConfirmDeletingCard.openPopup();
            const deleteButton = popupConfirmDeletingCard.handleConfirmDeletingCard();
            deleteButton.addEventListener('click',()=>{
                 popupConfirmDeletingCard.changeButtonText(true);
                 api.deleteCard(cardData._id)
                 .then(()=> {card.deleteCurrentCard(card);
                             popupConfirmDeletingCard.closePopup()})
                 .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
                 .finally(() => {popupConfirmDeletingCard.changeButtonText(false)
                                 console.log('Card deleted sucesfully!')});
            })
      }
    }, selectors.template);
 return card.generateCard();
};