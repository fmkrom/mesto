import {pageProfileName,
        pageProfileJob, 
        formFieldName,
        formFieldJob
} from "../utils/constants.js"

export class UserInfo{
    constructor(userName, userJob){
        this.userName = userName;
        this.userJob = userJob;
    }

    getUserInfo(formName, formJob){
        this.userName = formName;
        this.userJob = formJob;
    }

    setUserInfo(formName, formJob){
        formName = this.userName;
        formJob = this.userJob;
    }
};