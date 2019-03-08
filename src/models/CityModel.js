import axios from "axios";
// const endPoint = `https://radiant-tor-11139.herokuapp.com/api/city`;
const endPoint = `http://localhost:3001/api/city`;

class CityModel {
  static all() {
    let request = axios.get(endPoint);
    return request;
  }

  static oneCity(cityId) {
    let request = axios.get(`${endPoint}/${cityId}`);
    return request;
  }
}
export default CityModel;
