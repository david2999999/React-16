import React, { Component } from 'react';
import Person from "./components/Person/Person";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Hi, I'm React App.</h1>
                <Person/>
                <Person/>
                <Person/>
            </div>
        )
    }
    // render() {
    //     return React.createElement('div', {className:'App'},
    //         React.createElement('h1', null, 'Does this work now?'));
    // }
}

export default App;
