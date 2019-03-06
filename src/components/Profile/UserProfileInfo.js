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
                      {/* Will Change to Current User */}
                    <ListGroupItem>Name</ListGroupItem>
                    <ListGroupItem>City</ListGroupItem>
                    <ListGroupItem>Date Joined</ListGroupItem>
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
