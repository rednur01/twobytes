import React, { Component } from 'react';
import Modal from './modal';
import Recipe from '../recipe';

class FavoritesModal extends Component {
    render() {
        if (this.props.currentUser !== '') {
            return (
            <Modal onClose={this.props.onClose} title={"Favorites"}>
                Your Favorites
                <ul className="recipeList">
                    {this.props.favorites.map((recipe) =>
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
