import {Popup} from "./Popup.js";

export class PopupWithFullSizeImage extends Popup {
    constructor({popupSelector, fullSizeImagePic, fullsizeImageTitle}){
        super(popupSelector);
        this.fullSizeImagePic = fullSizeImagePic;
        this.fullsizeImageTitle = fullsizeImageTitle;
    }

    openFullSizeImage(name, link){
        super.openPopup();
        this.fullSizeImagePic.setAttribute('src', link);
        this.fullsizeImageTitle.textContent = name;
        this.fullSizeImagePic.setAttribute('alt', name);
    }

};
