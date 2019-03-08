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
                    editMode={this.props.editMode}
                    updateInfo={this.props.updateInfo}
                    // onSubmit={this.props.onSubmit}
                    saveInfo={this.props.saveInfo}
                    hideUpdate={this.props.hideUpdate}/>
            </div>
        );
    }
}

export default UserProfileList;