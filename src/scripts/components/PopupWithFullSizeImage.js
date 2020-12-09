import {Popup} from "./Popup.js";

import {fullsizeImage,
        fullsizeImageTitle
    } from "../utils/constants.js";

export class PopupWithFullSizeImage extends Popup {
    constructor(popup){
        super(popup);
    }

    openFullSizeImage=(name, link)=>{
        super.openPopup();
        fullsizeImage.setAttribute('src', link);
        fullsizeImageTitle.textContent = name;
        fullsizeImage.setAttribute('alt', name);
    }

};
