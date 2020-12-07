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
        formName = this.userName;
        formJob = this.userJob;
        
        //formName = pageProfileName.textContent;
        //formJob = pageProfileJob.textContent;
    }

    setUserInfo(formName, formJob){
        pageProfileName.textContent = formName;
        pageProfileJob.textContent = formJob;
    }
};

/*
Итог: не работает геттер. Сеттер работает только 1 раз, затем - пусто.
Завтра решить эту проблему.
*/