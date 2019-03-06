import axios from "axios";

// const endPoint = `https://radiant-tor-11139.herokuapp.com/api/posts`;
const endPoint = `http://localhost:3001/api/posts`;

class PostModel {
  static all() {
    let request = axios.get(endPoint);
    return request;
  }

  static onePost(post) {
    let request = axios.get(`${endPoint}`);
  }

  static userPosts(post) {
    let request = axios.get(`${endPoint}/user/${post.userId}`);
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
  static update(post, updateInfo) {
    let request = axios.post(`${endPoint}/${post._id}`, updateInfo);
    return request;
  }
  // delete a post
  static delete(post) {
    let request = axios.delete(`${endPoint}/${post._id}`);
    return request;
  }
}

export default PostModel;
