import React, { Component } from 'react';
import Person from "./components/Person/Person";
import './App.css';

class App extends Component {
    state = {
        persons: [
            { name: 'David', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Steph', age: 32 }
        ]
    };

    render() {
        return (
            <div className='App'>
                <h1>Hi, I'm React App.</h1>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
                    My Hobbies: Coding
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        )
    }
    // render() {
    //     return React.createElement('div', {className:'App'},
    //         React.createElement('h1', null, 'Does this work now?'));
    // }
}

export default App;
