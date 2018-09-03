import React, { Component } from 'react';
import './App.css';
import Survey from './Survey';

class App extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Survey />
            </div>
        )
    }
}

export default App;