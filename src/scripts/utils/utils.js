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

<<<<<<< HEAD
/*
export function createCard(cardData, userID, cardClass, apiClass, openedPopupWithFullSizeImageClass, popupConfirmDeletingCardClass, templateSelector){
  const currentCard = new cardClass({
    data: cardData,
    userId: userID,
    handleCardClick:()=>{
        console.log(userId);
=======
export function createNewCard(cardData, cardClass, apiClass, openedPopupWithFullSizeImageClass, popupConfirmDeletingCardClass, templateSelector){
  const currentCard = new cardClass({
    data: cardData,
    confirmCardOwner:()=>{
      apiClass.getUser().then(userData =>{
          currentCard.showDeleteButton(userData._id);
          currentCard.setLikeButton(userData._id);
        }).catch(err => console.log(`Ошибка подтверждения владельца карточки: ${err}`));
    },
    handleCardClick:()=>{
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
        openedPopupWithFullSizeImageClass.
        openFullSizeImage(cardData.name, cardData.link);
    },
    handleLikeCard:()=>{
<<<<<<< HEAD
        const currentLikeStatus = !currentCard.confirmLikeStatus(userId);
        apiClass.likeCard(cardData._id, currentLikeStatus)
        .then(currentCardData =>{
          console.log(`current Like status in createNewCard: ${currentLikeStatus}`);
          currentCard.updateLikesCount(currentCardData);
          console.log('Лайк карточки успешно поставлен', currentCardData.likes);
        })
        .catch(err => console.log(`Ошибка лайка карточки: ${err}`))
=======
    apiClass.getUser().then(userData =>{  
        const currentLikeStatus = !currentCard.confirmLikeStatus(userData._id);
        apiClass.likeCard(cardData._id, currentLikeStatus)
        .then(currentCardData =>{
        //console.log(`current Like status in createNewCard: ${currentLikeStatus}`);
          currentCard.toggleLikeButton(currentLikeStatus);
          currentCard.updateLikesCount(currentCardData);
        //console.log('Лайк карточки успешно поставлен', currentCardData.likes);
        })
        .catch(err => console.log(`Ошибка лайка карточки: ${err}`))
      }
    ).catch(err => console.log(`Ошибка подтверждения владельца карточки: ${err}`));
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
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
<<<<<<< HEAD
*/
=======

/* Вариант функции лайка карточки:

handleLikeCard:()=>{
                api.getUser().then((userData) =>{
                        const currentLikeStatus = !card.confirmLikeStatus(userData._id);

                        api.likeCard(cardData._id, currentLikeStatus)
                        .then(currentCardData =>{
                            card.toggleLikeButton(currentLikeStatus, currentCardData);
                            }
                        )
                        .catch(err => console.log(`Ошибка лайка карточки: ${err}`))
                }).catch(err => console.log(`Ошибка загрузки данных пользователя: ${err}`))
          },

*/
>>>>>>> 7a9210bf67dee7b352b761ff6375a99f0c871974
