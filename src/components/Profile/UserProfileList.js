import React, { Component } from 'react';
import UserInfo from './UserProfileInfo';

class UserProfileList extends Component {
    render() {
        return (
            <div>
                <UserInfo
                    username={this.props.username}
                    email={this.props.email}
                    city={this.props.city}
                    dateJoined={this.props.dateJoined}
                    editInput={this.props.editInput}
                    updateInfo={this.props.updateInfo}/>
            </div>
        );
    }
}

export default UserProfileList;