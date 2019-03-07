import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem, Button, Image} from 'react-bootstrap'
import './UserProfileInfo.css'
import GA from "./GA.jpg"

export default class UserInfo extends Component {
  render() {
    return (
      <div>
        <Card className="Profile-Card" style={{ width: '18rem' }}>
          <Image className="Profile-image" src={GA} roundedCircle fluid/>
            <Card.Body>
              <Card.Title className="title">Welcome to your profile!</Card.Title>
                </Card.Body>
                  <ListGroup className="list-group-flush">
                    <form>
                      {/* Will Change to Current User */}
                      <ListGroupItem>Name: {this.props.username}
                        <span className={this.props.editInput}><input type="text" name="username" placeholder={this.props.username}></input></span>
                      </ListGroupItem>
                      
                      <ListGroupItem>Email: {this.props.email}
                        <span className={this.props.editInput}><input type="text" name="email" placeholder={this.props.email}></input></span>
                      </ListGroupItem>
                      <ListGroupItem>City: {this.props.city}
                        <span className={this.props.editInput}><input type="text" name="city" placeholder={this.props.city}></input></span>
                      </ListGroupItem>
                      <ListGroupItem>Date Joined: {this.props.dateJoined}</ListGroupItem>
                      <span className={this.props.editInput}><input type="submit" />Save</span>
                  </form>
                </ListGroup>
            <Card.Body>
            <Button
              value="Submit"
              type="submit"
              className="btn-info"
              onClick={this.props.updateInfo}
            > Edit </Button>
            </Card.Body>
        </Card>
      </div>
    )
  }
}
