import {popupFullsizeImage, fullsizeImage, fullsizeImageTitle, buttonCloseFullsizeImage} from "./constants.js"

import {openPopup} from "./index.js"

function openFullSizeImage(event){
    openPopup(popupFullsizeImage);
    
    /*Добавляем указатель события*/
    const eventTarget = event.target;
    
    const openedFullsizeImage = eventTarget.src;
        
    fullsizeImage.setAttribute('src', openedFullsizeImage);
    
    /*Вторая часть функии: добавляет к полноэкранному изображению название карточки*/

    //Выбираем ближайшую к цели события карточку
    const cardElement = eventTarget.closest('.card__rectangle');

    //В пределах этой карточки выбираем класс с названием карточки
    const openedFullsizeImageTitle = cardElement.querySelector('.card__title').textContent;
    
    //Ставим ее текст в соотв. поле высплывающего окна
    fullsizeImageTitle.textContent = (openedFullsizeImageTitle);
    
    //Добавляем картинке "alt": он дублирует название карточки
    fullsizeImageTitle.setAttribute('alt', openedFullsizeImageTitle);
};

export {openFullSizeImage};

export default function clearForm(button, settings){
    button.classList.add(settings.inactiveButtonClass);
    button.disabled = true;
}