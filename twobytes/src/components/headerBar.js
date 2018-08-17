import React, { Component } from 'react';
import logo from './applogo.svg';

class HeaderBar extends Component {
    render() {
        return (
            <div className="HeaderBar">
                <img id="applogo" src={logo} alt="Logo Here"/>
            </div>
        );
    }
}

export default HeaderBar;
