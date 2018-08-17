import React, { Component } from 'react';

class SearchButton extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        var item = document.getElementById('searchbox').value;
        document.getElementById('searchbox').value = '';
        this.props.onAdd(item);
    }
    
  render() {
    return (
      <div className="SearchButton">
        <button className="search" id="searchbutton" onClick={this.onPress}>Search</button>
      </div>
    );
  }
}

export default SearchButton;
