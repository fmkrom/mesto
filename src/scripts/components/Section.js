export class Section {
    constructor({renderer}, containerSelector){
            this._renderer = renderer;
            this._container = document.querySelector(containerSelector);
    };
    
    renderItems(cardData){
        cardData.forEach(item => {
            this._renderer(item);
        });
    }

    addElement(element){
        this._container.append(element);
    }
};