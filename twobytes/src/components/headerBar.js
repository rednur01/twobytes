import React, { Component } from 'react';
import logo from './applogo.svg';
import AboutModal from './modals/aboutModal';
import FavoritesModal from './modals/favoritesModal';
import LoginModal from './modals/loginModal';

class HeaderBar extends Component {
    //Props: currentUser, the current user logged in
    //setUser, sets the current user
    constructor(props) {
        super(props);
        this.state = {
            aboutModal: false,
            favoritesModal: false,
            loginModal: false
        };
        this.onHome = this.onHome.bind(this);
        this.onAbout = this.onAbout.bind(this);
        this.onFavorite = this.onFavorite.bind(this);
        this.onAccount = this.onAccount.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    onHome(e) {
        e.preventDefault();
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }

    onAbout(e) {
        e.preventDefault();
        this.setState({ aboutModal: true });
    }

    onFavorite(e) {
        e.preventDefault();
        this.setState({ favoritesModal: true });
    }


    onAccount(e) {
        e.preventDefault();
        this.setState({ loginModal: true });
    }

    closeModal() {
        this.setState({
            aboutModal: false,
            favoritesModal: false,
            loginModal: false
        });
    }

    login(name) {
        this.props.setUser(name);
    }

    logout() {
        this.props.setUser('');
    }

    render() {
        return (
            <div className="HeaderBar">
            <ul>
                <li><a href="Home" onClick={this.onHome}>Home</a></li>
                <li><a href="About Us" onClick={this.onAbout}>About Us</a></li>
                <li><img id="applogo" src={logo} alt="Logo Here"/></li>
                <li><a href="Favorites" onClick={this.onFavorite}>Favorites</a></li>
                <li><a href="My Account" onClick={this.onAccount}>My Account</a></li>
            </ul>
            {/* All modals*/}
            {this.state.aboutModal && <AboutModal onClose={this.closeModal} />}
            {this.state.favoritesModal &&
                <FavoritesModal onClose={this.closeModal} currentUser={ this.props.currentUser } />
            }
            {this.state.loginModal &&
                <LoginModal onClose={this.closeModal} currentUser={ this.props.currentUser }
                            login={this.login} logout={this.logout} />
            }
            </div>
        );
    }
}

export default HeaderBar;
