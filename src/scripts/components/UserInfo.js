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
        this.userName = formName;
        this.userJob = formJob;
        
        console.log(this.userName, this.userJob, '/это данные со страницы');
        console.log(formName, formJob, '/это поля формы');

        console.log('setUserInfo works!');
    }
};