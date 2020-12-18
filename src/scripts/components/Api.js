export class Api {
    constructor(config) {
        this._basicUrl = config.url;
        this._headers = config.headers;
    }
    
    getCardsDataFromServer() {
        return fetch(`${this._basicUrl}cards`,{
            method: 'GET',
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
               return res.json();
            }
            return Promise.reject(`"Произошла ошибка ${res.status}"`);
        })
    };

    /*getCurrentCard(cardId){
        return fetch(`${this._basicUrl}cards/${cardId}`,{
              method: "GET",
              headers: this._headers,
            }).then((res) => {
              if (res.ok) {
                  console.log('this getCurrentCard from server result:', res);
                  console.dir(res);
                return res.json();
              } return Promise.reject(`"Ошибка в getCardFromServer ${res.status}"`);
          });
      }
    */

    likeCard(cardId) {
      return fetch(`${this._basicUrl}cards/likes/${cardId}`,{
          method: 'PUT',
          headers: this._headers,
      }).then((res) => {
          if (res.ok) {
            console.log('This is result of LIKING card: ', res.status);
            return res.json();
          }
          return Promise.reject(`"Произошла ошибка в методе лайка карточки ${res.status}"`);
      })
    };

    dislikeCard(cardId) {
      return fetch(`${this._basicUrl}cards/likes/${cardId}`,{
          method: 'DELETE',
          headers: this._headers,
      }).then((res) => {
          //console.log(cardId);
          if (res.ok) {
            console.log('This is result of DISLIKING card: ', res.status); 
            return res.json();
          }
          return Promise.reject(`"Произошла ошибка ${res.status}"`);
      })
    };
    
    addCardToServer(formName, formLink) {
      return fetch(`${this._basicUrl}cards`,{
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: formName,
                link: formLink
            }),
          }).then((res) => {
            if (res.ok) {
                console.log('this is fetch addCardToServer result:', res);
                console.dir(res);
              return res.json();
            } return Promise.reject(`"Ошибка в addCardToServer${res.status}"`);
        });
    }

    deleteCard(cardId) {
        return fetch(`${this._basicUrl}cards/${cardId}`,{
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`"Произошла ошибка в удалении карточки: ${res.status}"`);
        });
    }

   getUserData(){
   return fetch(`${this._basicUrl}users/me`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => {
          if (res.ok) {
              //console.log('This is getUserData result:', res);
              return res.json();
            }
            return Promise.reject("Произошла ошибка в получнии данных пользователя");
        })
    };

    setUserData(name, about){
    return fetch(`${this._basicUrl}users/me`,{
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
            name: name,
            about: about
        }),
      }).then((res) => {
          if (res.ok) {
            console.dir(res);
            console.log(res.status, res.statusText);
            return res.json();
          }
          return Promise.reject("Произошла ошибка - данные пользователя не отправились на сервер");
      })
    };

    editAvatar(avatarUrl){
      return fetch(`${this._basicUrl}users/me/avatar`,{
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({avatar: avatarUrl}),
      }).then((res) => {
          if (res.ok) {
            console.dir(res);
            console.log(res.status, res.statusText);
            return res.json();
          }
          return Promise.reject(`Произошла ошибка в функции редактирования аватара ${res.status}`);
      })
    };
};

