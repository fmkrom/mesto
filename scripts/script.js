let elementPopUp = document.querySelector('.popup');
let elementPopUpForm = document.querySelector('.popup__form-content');
let formFieldName = document.querySelector('.popup__form-field-name');
let formFieldJob = document.querySelector('.popup__form-field-job'); 

let pageProfileName = document.querySelector('.profile__name'); 
let formNameDefault = pageProfileName.textContent;
let pageProfileJob = document.querySelector('.profile__job');
let formJobDefault = pageProfileJob.textContent;

let buttonEditProfile = document.querySelector('.profile__edit-button');
let buttonSaveChanges = document.querySelector('.popup__form-button-save');
let buttonClosePopupDismissChanges = document.querySelector('.popup__form-button-close');

function functionPopUpOpen(){
    elementPopUp.classList.remove('popup');
    elementPopUp.classList.add('popup_opened');

    formFieldName.value = (formNameDefault);
    formFieldJob.value = (formJobDefault);

}

buttonEditProfile.addEventListener('click', functionPopUpOpen);

function editProfileAndSaveChanges(evt){
    evt.preventDefault();
    
    pageProfileName.textContent = (formFieldName.value);
    pageProfileJob.textContent = (formFieldJob.value);

    formNameDefault = (formFieldName.value);
    formJobDefault = (formFieldJob.value);
    
    elementPopUp.classList.remove('popup_opened');
    elementPopUp.classList.add('popup');
    
}

elementPopUpForm.addEventListener('submit', editProfileAndSaveChanges);

function dismissChangesAndClosePopup(){
    
    formFieldName.textContent = (pageProfileName);
    formFieldJob.textContent = (pageProfileJob);

    elementPopUp.classList.remove('popup_opened');
    elementPopUp.classList.add('popup');
   
}

buttonClosePopupDismissChanges.addEventListener ('click', dismissChangesAndClosePopup);
