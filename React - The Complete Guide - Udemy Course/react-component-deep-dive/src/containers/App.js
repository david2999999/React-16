import React, { Component } from 'react';
import styled from 'styled-components';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";
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

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        });

        //const person = Object.assign({}, this.state.persons[personIndex]);
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    };

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <Persons persons={this.state.persons}
                         clicked={this.deletePersonHandler}
                         changed={this.nameChangeHandler}/>
            );
        }

        return (
            <div className='App'>
                <Cockpit showPersons={this.state.showPersons}
                         persons={this.state.persons}
                         clicked={this.togglePersonsHandler}/>
                { persons }
            </div>
        )
    }
}

export default App;
