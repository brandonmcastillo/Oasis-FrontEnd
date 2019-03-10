import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap';
import './UserProfileInfo.css';
import GA from './GA.jpg';

class UserInfo extends Component {
  state = {
    username: this.props.username,
    email: this.props.email,
    city: this.props.city
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.username === undefined ||
      this.state.email === undefined ||
      this.state.city === undefined
    ) {
      return;
    }
    let newUserInfo = this.state;
    this.props.saveInfo(newUserInfo);
  };

  render() {
    return (
      <div>
        <Card className="Profile-Card">
          <Image className="Profile-image" src={GA} roundedCircle fluid />
          <Card.Body>
            <Card.Title className="title">Welcome to your profile!</Card.Title>
          </Card.Body>

          <ListGroup className="list-group-flush">
            <form onSubmit={this.onSubmit}>
              <ListGroupItem>
                Name:
                <span className={this.props.editMode}>
                  {this.props.username}
                </span>
                <span className={this.props.editInput}>
                  <input
                    type="text"
                    name="username"
                    placeholder={this.props.username}
                    onChange={this.onChange}
                    required
                  />
                </span>
              </ListGroupItem>

              <ListGroupItem>
                Email:
                <span className={this.props.editMode}>{this.props.email}</span>
                <span className={this.props.editInput}>
                  <input
                    type="email"
                    name="email"
                    placeholder={this.props.email}
                    onChange={this.onChange}
                    required
                  />
                </span>
              </ListGroupItem>
              <ListGroupItem>
                City:
                <span className={this.props.editMode}>{this.props.city}</span>
                <span className={this.props.editInput}>
                  <input
                    type="text"
                    name="city"
                    placeholder={this.props.city}
                    onChange={this.onChange}
                    required
                  />
                </span>
              </ListGroupItem>
              <ListGroupItem>
                Date Joined: {this.props.dateJoined}
              </ListGroupItem>
              <Card.Body className={this.props.editInput}>
                <Button
                  value="Submit"
                  type="submit"
                  className={`btn-info edit-button ${this.props.editInput}`}
                >
                  Save
                </Button>
                <Button
                  value="Submit"
                  className={`btn-info edit-button ${this.props.editInput}`}
                  onClick={this.props.hideUpdate}
                >
                  Cancel
                </Button>
              </Card.Body>
            </form>
          </ListGroup>
          <Card.Body className={this.props.editMode}>
            <Button
              value="Submit"
              type="submit"
              className={`btn-info`}
              onClick={this.props.updateInfo}
            >
              Edit
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default UserInfo;
