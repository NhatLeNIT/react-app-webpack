import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './App.css';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
    // return import('./containers/Pizza.js');
});

class App extends Component {
    render () {
        return (
            <div>
               
            </div>
        );
    }
}

export default App;