//----------  Imports  ----------//
import React, { Component } from 'react';
import Container from './components/container';
import HeaderBar from './components/headerBar';

//Icons - Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faTimes, faSearch);


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: '',
            favorites: []
        };
        this.setUser = this.setUser.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
    }

    setUser(name) {
        this.setState({ currentUser: name});
        if (name === '') {
            this.setState({ favorites: [] });
        }
    }

    toggleFavorite(recipe) {
        if (this.state.currentUser !== '') {
            let favorites = this.state.favorites;
            if ( !favorites.includes(recipe) ) {
                favorites.push(recipe);
                this.setState({ favorites: favorites });
            }
        }
    }

    render() {
        return (
            <div className="App">
                <HeaderBar  currentUser={this.state.currentUser} setUser={this.setUser} favorites={this.state.favorites}/>
                <Container toggleFavorite={this.toggleFavorite} />
            </div>
        );
    }
}

export default App;
