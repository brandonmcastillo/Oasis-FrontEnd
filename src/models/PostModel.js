import axios from "axios";
// For Heroku
// const endPoint = `https://oasis-backend.herokuapp.com/api/posts`;
const endPoint = `http://localhost:3001/api/posts`;

class PostModel {
  static all() {
    let request = axios.get(endPoint);
    return request;
  }

  static onePost(postId) {
    let request = axios.get(`${endPoint}/${postId}`);
    return request;
  }

  static userPosts(userId) {
    let request = axios.get(`${endPoint}/user/${userId}`);
    return request;
  }

  static cityPosts(cityId) {
    let request = axios.get(`${endPoint}/city/${cityId}`);
    return request;
  }

  // post should be an object
  // it must have a userId and cityId properties
  static create(post) {
    let request = axios.post(
      `${endPoint}/user/${post.userId}/city/${post.cityId}`,
      post
    );
    return request;
  }

  // updateInfo should be an object with the info to be updated
  static update(postId, updateInfo) {
    let request = axios.put(`${endPoint}/${postId}`, updateInfo);
    return request;
  }
  // delete a post
  static delete(postId) {
    let request = axios.delete(`${endPoint}/${postId}`);
    return request;
  }
}

export default PostModel;
