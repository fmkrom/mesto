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

export function createNewCard(cardData, cardClass, apiClass, openedPopupWithFullSizeImageClass, popupConfirmDeletingCardClass, templateSelector){
  const currentCard = new cardClass({
    data: cardData,
    confirmCardOwner:()=>{
      apiClass.getUser().then(userData =>{
          currentCard.showDeleteButton(userData._id);
        }).catch(err => console.log(`Ошибка подтверждения владельца карточки: ${err}`));
    },
    handleCardClick:()=>{
        openedPopupWithFullSizeImageClass.
        openFullSizeImage(cardData.name, cardData.link);
    },
    handleLikeCard:()=>{
    apiClass.getUser().then(userData =>{  
        const currentLikeStatus = !currentCard.confirmLikeStatus(userData._id);
        apiClass.likeCard(cardData._id, currentLikeStatus)
        .then(currentCardData =>{
          
        //currentCard.toggleLikeButton(currentLikeStatus);
          console.log(`current Like status in createNewCard: ${currentLikeStatus}`);
          currentCard.toggleLikeButton(currentLikeStatus);

          currentCard.updateLikesCount(currentCardData);
          console.log('Лайк карточки успешно поставлен', currentCardData.likes);
          
        })
        .catch(err => console.log(`Ошибка лайка карточки: ${err}`))
      }
    ).catch(err => console.log(`Ошибка подтверждения владельца карточки: ${err}`));
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
                           console.log('Card deleted sucesfully!')});
      })
    }
  }, templateSelector);
  //console.log(currentCard.generateCard());
  return currentCard.generateCard();
};

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
