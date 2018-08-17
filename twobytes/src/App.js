//----------  Imports  ----------//
import React, { Component } from 'react';
import Container from './components/container';
import HeaderBar from './components/headerBar';

//Icons - Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faTimes, faSearch);


class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderBar />
                <Container />
            </div>
        );
    }
}

export default App;
