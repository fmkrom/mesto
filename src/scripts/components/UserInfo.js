export class UserInfo{
    constructor(selectors){
        this._userName = document.querySelector(selectors.userName);
        this._userAbout = document.querySelector(selectors.userAbout);
        this._userAvatar = document.querySelector(selectors.userAvatar);    
    }

    getUserInfo(){
        return {
            userName: this._userName.textContent,
            userAbout: this._userAbout.textContent,
        }
    };

    getUserAvatar(){
        return {
            userAvatar: this._userAvatar.src
        }
    };

    setUserInfo(data){
        this._userName.textContent = data.name;
        this._userAbout.textContent = data.about;
    };

    setUserAvatar(url){
        this._userAvatar.src = url;
    };
};

