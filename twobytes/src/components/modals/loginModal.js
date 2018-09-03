import React, { Component } from 'react';
import Modal from './modal';

const buttonStyle = {
    backgroundColor: 'hsl(94, 41%, 58%)',
    border: 'none',
    color: 'white',
    padding: '4px 10px',
    marginTop: '8px'
};

class LoginModal extends Component {
    /*Props:
        currentUser: string or empty string, tells you where a user is logged in or not
        login: function, logs user in
        logout: function, logs user out
        onClose: user closes modal
    */
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
    }

    login() {
        let name = document.getElementById('loginname').value;
        name = name.toLowerCase();
        ( name !== '' ) && this.props.login(name);
    }

    enterPressed(e) {
        const enterButtonCode = 13;
        if (e.keyCode === enterButtonCode) {
            this.login();
        }
    }

    render() {
        if (this.props.currentUser === '') {
            return (
                <Modal onClose={this.props.onClose} title={"Log In"}>
                    Username: <input type="text" id="loginname" onKeyUp={this.enterPressed} /> <br/>
                    <button style={buttonStyle} onClick={this.login}>Log In</button>
                </Modal>
            )
        } else {
            return (
                <Modal onClose={this.props.onClose} title={"Logged In"}>
                    Welcome {this.props.currentUser} <br/>
                    <button style={buttonStyle} onClick={this.props.logout}>Log Out</button>
                </Modal>
            )
        }
    }
}

export default LoginModal;
