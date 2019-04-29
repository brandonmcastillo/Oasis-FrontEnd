import axios from "axios";
// For Heroku
// const endPoint = `https://oasis-backend.herokuapp.com/api/city`;
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
