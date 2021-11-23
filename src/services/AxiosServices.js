const axios = require("axios").default;

export default class AxiosService{

    post(Url, Data, IsRequiredHeader=false, Header){
        return axios.post(Url, Data, IsRequiredHeader&&Header);
    }

    
}