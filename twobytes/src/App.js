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
            currentUser: ''
        };
        this.setUser = this.setUser.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.toggleFavoriteLocal = this.toggleFavoriteLocal.bind(this);
    }

    setUser(name) {
        this.setState({ currentUser: name});
        if (name === '') {
            this.setState({ favorites: [] });
        }
    }
    // Local state favorites
    toggleFavoriteLocal(recipe) {
        if (this.state.currentUser !== '') {
            let favorites = this.state.favorites;
            if ( !favorites.includes(recipe) ) {
                favorites.push(recipe);
                this.setState({ favorites: favorites });
            }
        }
    }

    //Server side favorites, will persist
    async toggleFavorite( recipe ) {
        if (this.state.currentUser !== '') {
            let favorite = {
                user: this.state.currentUser,
                recipe: recipe
            };
            var res = await fetch("http://localhost:5000/favorite", {
                method: "POST",
                mode: "cors",
                headers: {"Content-Type": "application/json; charset=utf-8"},
                body: JSON.stringify( favorite )
            });
            res = await res.text();
            console.log(res);
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
