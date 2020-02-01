import React, { Component } from 'react';
import Person from "./components/Person/Person";
import './App.css';

class App extends Component {
    state = {
        persons: [
            { name: 'David', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Steph', age: 32 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Steph', age: 27 }
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'David', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Steph', age: 27 }
            ]
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            borderRadius: '3px'
        };

        let persons = this.state.showPersons ? (
            <div>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'David Click 2')}
                        changed={this.nameChangeHandler}>
                    My Hobbies: Coding
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        ) : null;

        return (
            <div className='App'>
                <h1>Hi, I'm React App.</h1>
                <button onClick={this.togglePersonsHandler}
                        style={style}>
                    Toggle List
                </button>
                { persons }
            </div>
        )
    }
    // render() {
    //     return React.createElement('div', {className:'App'},
    //         React.createElement('h1', null, 'Does this work now?'));
    // }
}

export default App;
