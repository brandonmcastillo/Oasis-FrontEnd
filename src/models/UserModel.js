import axios from 'axios'

const endPoint = `https://radiant-tor-11139.herokuapp.com/user`

class UserModel {
    static all(){
        let request = axios.get(endPoint)
        return request
    }
    static signup(){
        let request = axios.post(endPoint)
        return request
    }
    static login(){
        let request = axios.post(endPoint)
        return request
    }
    static update(user, updateInfo){
        let request = axios.put(`${endPoint}/${user._id}`, updateInfo)
        return request
    }
    static delete(user){
        let request = axios.delete(`${endPoint}/${user._id}`)
        return request
    }
}

export default UserModel