import axios from "axios";

// const endPoint = `https://radiant-tor-11139.herokuapp.com/user`;
const endPoint = `http://localhost:3001/user`;

class UserModel {
  static all() {
    let request = axios.get(endPoint);
    return request;
  }
  static getUser(userId) {
    let request = axios.get(`${endPoint}/${userId}`)
    return request
  }
  static signup(user) {
    let request = axios.post(`${endPoint}/signup`, user);
    return request;
  }
  static login() {
    let request = axios.post(endPoint);
    return request;
  }
  static update(userId, updateInfo) {
    let request = axios.put(`${endPoint}/${userId}`, updateInfo);
    return request;
  }
  static delete(user) {
    let request = axios.delete(`${endPoint}/${user._id}`);
    return request;
  }
}

export default UserModel;
