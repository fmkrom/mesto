export class Section {
    constructor({renderer}, cardsContainer){
            this._renderer = renderer;
            this._container = document.querySelector(cardsContainer);
    };
    
    renderItems(data){
        data.forEach(item => {this._renderer(item)})
    };

    addElement(element){
        this._container.append(element);
    }
};