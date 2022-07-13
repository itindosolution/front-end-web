import CONFIG from '../globals/config'; 
//import AccessToken from "../utils/accessToken";

class Api{

    static async getAll({route, query=''}) {
        const response = await fetch(CONFIG.BASE_URL_API+route+query);
        const responseJson = await response.json();
        return responseJson;
    }
}

export default Api