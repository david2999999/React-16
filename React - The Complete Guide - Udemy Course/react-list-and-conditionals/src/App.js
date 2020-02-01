import React, { Component } from 'react';
import Person from "./components/Person/Person";
import './App.css';

class App extends Component {
    state = {
        persons: [
            { id: '23123wsda', name: 'David', age: 28 },
            { id: 'dasdasd12', name: 'Manu', age: 29 },
            { id: 'asdd12d12', name: 'Steph', age: 32 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        });
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
                {
                    this.state.persons.map((person, index) => (
                        <Person key={person.id}
                                name={person.name}
                                age={person.age}
                                click={() => this.deletePersonHandler(index)}/>
                    ))
                }
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
}

export default App;
