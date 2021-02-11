export function enableOpenPopupButton(button, popupClass, submitButton, settings){
    button.addEventListener('click', ()=>{
        popupClass.openPopup();
        submitButton.classList.add(settings.inactiveButtonClass);
        submitButton.disabled = true
    })
};