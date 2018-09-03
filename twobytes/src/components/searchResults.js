import React, { Component } from 'react';
import Recipe from './recipe';

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <ul className="recipeList">
                    {this.props.recipes.map((recipe) =>
                        <li><Recipe recipe={recipe} toggleFavorite={this.props.toggleFavorite} /></li>
                    )}
                </ul>
                <div className="logobox">
                    <div className="logo"><div id="edamam-badge" data-color="white"></div></div>
                </div>
            </div>
        );
  }
}

export default SearchResults;
