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
        formName.value = this.userName;
        formJob.value = this.userJob;
    }

    setUserInfo(formName, formJob){
        pageProfileName.textContent = formName;
        pageProfileJob.textContent = formJob;
    }
};