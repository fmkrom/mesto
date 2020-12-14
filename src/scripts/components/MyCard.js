export class MyCard extends Card {
    constructor({name, link, likes, handleCardClick, handleDeleteCard}, templateSelector){
        super(name, link, likes, templateSelector, handleCardClick);
        this._handleDleteCard = handleDeleteCard;
    };
    
    _deleteCard=(element)=>{
        element.remove();
        element = null;
    };

    generateCard(){
        //super.generateCard();

        const deleteButton = this._element.querySelector('.card__delete-button');
        console.log(deleteButton);
        deleteButton.classList.remove('.card__delete-button_hidden');
        deleteButton.classList.add('.card__delete-button_shown');

        deleteButton.addEventListener('click', ()=>{
            this.handleDeleteCard();
        });
    }
};

/*_deleteCard=(element)=>{
        element.remove();
        element = null;
    };*/

    /*_handleDeleteButtonClick(element){
        const deleteButton = this._template.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', ()=>{
            console.log(deleteButton);
            this.handleDeleteCard(element);
            //this._deleteCard(element);
        })

    const deleteButton = this._element.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', ()=>{
            //console.log(deleteButton);
            this.handleDeleteCard();
    });
}*/
