import React, { Component } from 'react';
//import SearchButton from './searchButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.keyPressHandler = this.keyPressHandler.bind(this);
    }

    keyPressHandler(event) {
        const enterButtonCode = 13;
        if (event.keyCode === enterButtonCode) {
            var item = document.getElementById('searchbox').value;
            document.getElementById('searchbox').value = '';
            this.props.onAdd(item);
        }
    }

    render() {
        return (
            <div className="SearchBar">
                <FontAwesomeIcon icon="search" id="searchicon"/>
                <input type="text" placeholder={this.props.placeholder}
                className="search" id="searchbox"
                onKeyUp={this.keyPressHandler}></input>

            </div>
        );
    }
}

export default SearchBar;
