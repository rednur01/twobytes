import React, { Component } from 'react';
import logo from './applogo.svg';

class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.onHome = this.onHome.bind(this);
        this.onAbout = this.onAbout.bind(this);
        this.onFavorite = this.onFavorite.bind(this);
        this.onAccount = this.onAccount.bind(this);
    }

    onHome(e) {
        e.preventDefault();
    }

    onAbout(e) {
        e.preventDefault();
    }

    onFavorite(e) {
        e.preventDefault();
    }


    onAccount(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="HeaderBar">
            <ul>
                <li><a href="#" onClick={this.onHome}>Home</a></li>
                <li><a href="#" onClick={this.onAbout}>About Us</a></li>
                <li><img id="applogo" src={logo} alt="Logo Here"/></li>
                <li><a href="#" onClick={this.onFavorite}>Favorites</a></li>
                <li><a href="#" onClick={this.onAccount}>My Account</a></li>
            </ul>
            </div>
        );
    }
}

export default HeaderBar;
