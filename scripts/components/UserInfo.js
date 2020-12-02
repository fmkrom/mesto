import {pageProfileName,
        pageProfileJob
} from "../utils/constants.js"

export class UserInfo{
    constructor(userName, userJob){
        this.userName = userName;
        this.userJob = userJob;
    }

    getUserInfo(){
        this.userName = pageProfileName.textContent;
        this.userJob = pageProfileJob.textContent;
    }

    setUserInfo(){
        pageProfileName.textContent = this.userName;
        pageProfileJob.textContent = this.userJob; 
    }
};