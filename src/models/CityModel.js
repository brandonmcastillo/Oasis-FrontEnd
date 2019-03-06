import axios from 'axios';

const endPoint = `https://radiant-tor-11139.herokuapp.com/api/city`

class CityModel {
    static all(){
        let request = axios.get(endpoint)
        return request
    }

    static oneCity(city){
        let request = axios.get(`${endpoint}/${city._id}`)
        return request
    }
}