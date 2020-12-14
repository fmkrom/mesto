export class MyCard extends Card {
    constructor({name, link, likes, handleCardClick, handleDeleteCard}, templateSelector){
        super(name, link, likes, templateSelector, handleCardClick);
        this._handleDleteCard = handleDeleteCard;
    };
    
    generateCard(){
        super.generateCard();

        const deleteButton = this._element.querySelector('.card__delete-button');
        deleteButton.classList.remove('.card__delete-button_hidden');
        deleteButton.classList.add('.card__delete-button_shown');

        deleteButton.addEventListener('click', ()=>{
            this.handleDeleteCard();
        });
         
        /*const deleteButton = this._element.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', ()=>{
            //console.log(deleteButton);
            this.handleDeleteCard();
        });*/
    }
};
