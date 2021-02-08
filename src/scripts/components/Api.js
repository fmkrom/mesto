export class Api {
    constructor(settings){
        this._url = settings.url;
        this._cohort = settings.cohort;
        this._token = settings.token;
    }

    //Базовый метод получения результата запроса

    getRes(res){
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка получения данных с сервера: ${res.status}`);
        }
    };
    
    //Методы карточек

    getCards(){
      return fetch(`${this._url}/${this._cohort}/cards`,
      {
       method: 'GET',
       headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
          },
      }).then(this.getRes);
    };

    addCard(name, url){
      return fetch(`${this._url}/${this._cohort}/cards`,
        {
        method: 'POST',
        headers:{
            authorization: this._token,
            'Content-Type': 'application/json'
          }, 
          body:JSON.stringify({
              name,
              url
          })
        }
      ).then(this.getRes);
    };

    likeCard(cardId, likeStatus){
      return fetch(`${this._url}/${this._cohort}/cards/likes/${cardId}`,
        {
          method: likeStatus ? 'PUT' : 'DELETE',
          headers:{
            authorization: this._token,
            'Content-Type': 'application/json'
          },
        }
      ).then(this.getRes);
    };

    deleteCard(cardId){
      return fetch(`${this._url}/${this._cohort}/cards/${cardId}`,
        {
          method: "DELETE",
          headers:{
            authorization: this._token,
            'Content-Type': 'application/json'
          }
        }
      ).then(this.getRes);
    };

    //Методы пользователя

    getUser(){
      return fetch(`${this._url}/${this._cohort}/users/me`,
        {
          method: 'GET',
          headers: {
            authorization: this._token
          }
        }
      ).then(this.getRes)
    };
    
    setUser({name, info}){
      return fetch(`${this._url}/${this._cohort}/users/me`,
        {
          method: 'PATCH',
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({
            name, 
            info
          }
        ).then(this.getRes)
      }
    )};

    editAvatar(url){
      return fetch(`${this._url}/${this._cohort}/users/me/avatar`,
      {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          url
        })
      }
      ).then(this.getRes)
    };
}

    
