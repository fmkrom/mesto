import {pageProfileName,
        pageProfileJob
    } from "../utils/constants.js"

export class UserInfo{
    constructor(userName, userJob){
        this.userName = userName;
        this.userJob = userJob;
    }

    getUserInfo(){
        this.userName.value = pageProfileName.textContent;
        this.userJob.value = pageProfileJob.textContent;
    }

    setUserInfo(evt){
        evt.preventDefault();
        pageProfileName.textContent = this.userName.value;
        pageProfileJob.textContent = this.userJob.value;
    }
}