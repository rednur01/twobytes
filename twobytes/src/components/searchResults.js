import React, { Component } from 'react';
import Recipe from './recipe';

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <ul>
                    {this.props.recipes.map((recipe) =>
                        <li><Recipe recipe={recipe}/></li>
                    )}
                </ul>
                <div className="logo"><div id="edamam-badge" data-color="white"></div></div>
            </div>
        );
  }
}

export default SearchResults;
