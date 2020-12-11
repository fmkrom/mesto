export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    
    getCardsFromServer() {
        return fetch(this._url, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
               return res.json();
            }
            return Promise.reject("Произошла ошибка");
        })
    };

    getCardLikesFromServer(){
      return fetch(this._url, {
          method: 'GET',
          headers: this._headers,
      }).then((res) => {
          if (res.ok) {
             return res.json();
          }
          return Promise.reject("Произошла ошибка");
      })
    };

    addCard(data) {
        return fetch(this._url, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            }),
        }).then((res) => {
            if (res.ok) {
                console.log(res);
                return res.json();
            }return Promise.reject("Произошла ошибка");
        });
    }

    deleteCard(id) {
        return fetch(`${this._url}${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject("Произошла ошибка");
        });
    }

    getUserData(){
        return fetch(this._url, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
               return res.json();
            }
            return Promise.reject("Произошла ошибка");
        })
    };

    setUserData(userData){
      return fetch(this._url, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            name: userData.name,
            link: userData.about
        }),
      }).then((res) => {
          if (res.ok) {
             return res.json();
          }
          return Promise.reject("Произошла ошибка");
      })
    };
};

/*Образец из задания:
// создаёт разметку для поста
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// вставляет разметку в DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML('afterbegin', markup);
}

function createPost(newPost) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', // нужно указать метод запроса
    // тело запроса
    body: JSON.stringify({
      title: newPost.title,
      body: newPost.text
    }),
    // и заголовки
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  }).then((res) => {
    return res.json();
  })
  .then((post) => {
      addPostToDOM(
        document.querySelector('.container'),
        createPostMarkup(post));
  });
}

// обработчик сабмита формы
document.forms.post.addEventListener('submit', function (event) {
  event.preventDefault();

  const { title, text } = event.currentTarget.elements;

  createPost({
    title: title.value,
    text: text.value
  });
});


*/