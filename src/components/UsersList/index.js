import React, { Component } from 'react';

class UsersList extends Component {

    render() {
        let usersList = this.props.users && this.props.users.length > 0 && this.props.users.map((item, index) => {
            return <div key={index} className='main-list' onClick={()=>this.props.onEditUser(item)}>
                <div className="avatar">
                <img src="user.png" />
                </div>
                <div className="user-details">
                    <h5 className="user-name">{item.name}{item.isAdmin?' (Admin)':null}</h5>
                    <h6 className="contact">{item.mobile}</h6>
                    <h6 className="mail">{item.mail}</h6>
                </div>
            </div>
        });
        return (
            <div>
                {usersList}
            </div>
        );
    }
}

export default UsersList;