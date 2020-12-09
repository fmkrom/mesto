import {pageProfileName,
        pageProfileJob, 
        formFieldName,
        formFieldJob
} from "../utils/constants.js"

export class UserInfo{
    constructor(userNameSelector, userJobSelector){
        this._userName = document.querySelector(userNameSelector);
        this._userJob = document.querySelector(userJobSelector);
    }

    getUserInfo(){
        return {
            userName: this._userName.textContent,
            userJob: this._userJob.textContent
        };    
    }

    setUserInfo(formName, formJob){
        this._userName.textContent = formName;
        this._userJob.textContent = formJob;
    }
};