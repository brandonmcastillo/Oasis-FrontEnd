import React, { Component } from "react";
import UserProfileList from "./UserProfileList";
import PostList from "./PostList";
import { Container, Row, Col } from "react-bootstrap";
import UserModel from "../../models/UserModel";
import PostModel from "../../models/PostModel";
import CreateUserPost from "./CreateUserPost";
import "./Profile.css";
class Profile extends Component {
  state = {
    username: "",
    email: "",
    city: "",
    dateJoined: "",
    editInput: "hidden",
    editMode: "show",
    userId: localStorage.getItem("userId"),
    userPosts: []
  };
  componentDidMount = () => {
    this.fetchUser();
    this.fetchPosts();
  };

  fetchUser = () => {
    UserModel.getUser(this.state.userId).then(response => {
      this.setState({
        username: response.data.username,
        email: response.data.email,
        city: response.data.city,
        dateJoined: new Date(response.data.dateJoined).toDateString()
      });
    });
  };

  fetchPosts = () => {
    PostModel.userPosts(this.state.userId).then(response => {
      this.setState({
        userPosts: response.data
      });
    });
  };

  editPost = (postId, editedPost) => {
    // debugger;
    // console.log(postId)
    // console.log(editedPost)
    // PostModel.update(postId, editedPost).then( response => {
    //   console.log(response)
    // })

    function isUpdatedPost(post) {
      return post._id === postId;
    }
    PostModel.update(postId, editedPost).then(response => {
      let userPosts = this.state.userPosts;
      userPosts.find(post => isUpdatedPost(post)).title = editedPost.title;
      userPosts.find(post => isUpdatedPost(post)).content = editedPost.content;

      this.setState({ userPosts });
    });
  };

  deletePost = postId => {
    PostModel.delete(postId).then(response => {
      let userPosts = this.state.userPosts.filter(function(post) {
        return post._id !== response.data._id;
      });
      this.setState({ userPosts });
    });
  };

  updateInfo = () => {
    this.setState({ editInput: "show", editMode: "hidden" });
  };

  saveInfo = newUserInfo => {
    UserModel.update(this.state.userId, newUserInfo).then(response => {
      this.setState({
        username: response.data.username,
        email: response.data.email,
        city: response.data.city,
        editInput: "hidden",
        editMode: "show   "
      });
    });
  };

  hideUpdate = () => {
    this.setState({ editInput: "hidden", editMode: "show" });
  };

  render() {
    let profileRender;
    if (!localStorage.userId && !localStorage.token) {
      profileRender = <p>Please login...</p>;
    } else {
      profileRender = (
        <div>
          <Col xs={12} sm={12} md={4}>
            <UserProfileList
              username={this.state.username}
              email={this.state.email}
              city={this.state.city}
              dateJoined={this.state.dateJoined}
              editInput={this.state.editInput}
              editMode={this.state.editMode}
              updateInfo={this.updateInfo}
              saveInfo={this.saveInfo}
              hideUpdate={this.hideUpdate}
            />
          </Col>
          <Col xs={12} sm={12} md={8}>
            {/* User Posts */}
            <h2 className="Your-Post">Your Posts</h2>
            <CreateUserPost />
            <PostList
              userPosts={this.state.userPosts}
              editPost={this.editPost}
              deletePost={this.deletePost}
            />
          </Col>
        </div>
      );
    }
    return (
      <div>
        <Container className="container-profile" fluid={true}>
          <Row noGutters={false} />
          {profileRender}
        </Container>
      </div>
    );
  }
}
export default Profile;
