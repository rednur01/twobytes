import React, { Component } from 'react';
import Modal from './modal';
import Recipe from '../recipe';

class FavoritesModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        };
    }

    async componentDidMount() {
        var favorites = await fetch(`http://localhost:5000/favorites?user=${this.props.currentUser}`);
        favorites = await favorites.json();
        this.setState({ favorites: favorites});
    }

    render() {
        if (this.props.currentUser !== '') {
            return (
            <Modal onClose={this.props.onClose} title={"Favorites"}>
                Your Favorites
                <ul className="recipeList">
                    {this.state.favorites.map((recipe) =>
                        <li><Recipe recipe={recipe} toggleFavorite={this.props.toggleFavorite}/></li>
                    )}
                </ul>
            </Modal>
            )
        } else {
            return (
                <Modal onClose={this.props.onClose} title={"Favorites"}>
                    Log in to see your favorites
                </Modal>
            )
        }
    }
}

export default FavoritesModal;
