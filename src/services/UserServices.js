import configuration from "./../configuration/configuration.js"
import AxiosService from "./AxiosServices.js";

const axiosService = new AxiosService();

export default class UserServices {

    SendEmail(data){
        var Url = configuration.SendEmail;
        return axiosService.post(Url, data, false);
    }
    
}

