import React, { Component } from 'react';

class UserEntryForm extends Component {
    constructor(props) {
        super(props);
        let { name, mobile, mail } = this.props.user;
        this.name = this.props.type === 'edit' ? name : '';
        this.phone = this.props.type === 'edit' ? mobile : '';
        this.mail = this.props.type === 'edit' ? mail : '';
    }

    render() {
        console.log('...');

        console.log(this.props);
        return (
            <div className="add-user">
                <h3>{this.props.type === 'add' ? 'Add a team member' : 'Edit team member'}</h3>
                <h3>{this.props.type === 'add' ? 'Set email, location and name' : 'Edit contact info , location and role'}</h3>
                <h6>Info</h6>
                Name:<input type="text" placeholder="name" className="name" onChange={(e) => this.name = e.target.value} />
                Phone:<input type="text" placeholder="phone" className="phone" onChange={(e) => this.phone = e.target.value} />
                Mail:<input type="text" placeholder="mail" className="mail" onChange={(e) => this.mail = e.target.value} />
                <button className="btn" onClick={() => this.props.onSaveHandler({ name: this.name, phone: this.phone, mail: this.mail, type: this.props.type })}>Save</button>
            </div>
        );
    }
}

export default UserEntryForm;