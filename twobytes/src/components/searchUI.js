import React, { Component } from 'react';
import SearchBar from './searchBar';
import SearchButton from './searchButton';
import FilterList from './filterList';

class SearchUI extends Component {
    render() {
        return (
            <div className="SearchUI">
                <SearchBar placeholder="Ingredient" onAdd={this.props.onAdd}/>
                <SearchButton text="Search" onAdd={this.props.onAdd}/>
                <FilterList ingredients={this.props.ingredients} onDelete={this.props.onDelete}/>
            </div>
        );
    }
}

export default SearchUI;
