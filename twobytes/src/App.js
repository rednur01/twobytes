//----------  Imports  ----------//
import React, { Component } from 'react';
import Container from './components/container';

//Icons - Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faTimes, faSearch);


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="headerbar"></header>
                <Container />
            </div>
        );
    }
}

export default App;
