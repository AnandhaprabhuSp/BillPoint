import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { homeAction, addUserAction, editUserAction } from "./redux/actions/homeAction";
import { bindActionCreators } from 'redux';
import userData from "./users.js";
import UsersList from "./components/UsersList";
import Modal from 'react-modal';
import UserEntryForm from "./components/UserEntryForm";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('body')
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalType: 'add',
      editUser: []
    }
    this.closeModal = this.closeModal.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.editUserData = this.editUserData.bind(this);
  }

  componentDidMount() {
    let { homeAction } = this.props;
    homeAction(userData);
  }
  addUser() {
    console.log('User added');
    this.setState({
      modalType: 'add',
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }
  saveHandler(obj) {
    console.log('Save handler');
    console.log(obj);
    this.closeModal()
    let { addUserAction } = this.props;
    if (obj.type === 'add')
      addUserAction({ id: obj.name, name: obj.name, mobile: obj.phone, mail: obj.mail, isAdmin: false });
    else
      addUserAction({ id: obj.name, name: obj.name, mobile: obj.phone, mail: obj.mail, isAdmin: false });

    // this.setState({
    //   modalIsOpen:false
    // });
  }
  editUserData(user) {
    console.log(user);
    this.setState({
      editUser: user,
      modalIsOpen: true,
      modalType: 'edit'
    });
  }

  render() {
    console.log(this.props);
    let { userData } = this.props;
    return (
      <div className="App" id="app">
        <header className="App-header">
          User Profiles
        </header>
        <div className="plus" onClick={() => this.addUser()}>+</div>
        <UsersList users={userData} onEditUser={this.editUserData} />
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <UserEntryForm type={this.state.modalType} user={this.state.editUser} onSaveHandler={this.saveHandler} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.home.users
})

const mapDispatchToProps = dispatch => ({
  homeAction: bindActionCreators(homeAction, dispatch),
  addUserAction: bindActionCreators(addUserAction, dispatch),
  editUserAction: bindActionCreators(editUserAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
