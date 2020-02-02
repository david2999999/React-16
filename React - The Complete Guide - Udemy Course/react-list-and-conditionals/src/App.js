import React, { Component } from 'react';
import Person from "./components/Person/Person";
import styled from 'styled-components';
import './App.css';

const StyleButton = styled.button`
    background-color: #0097e6;
    color: white;
    font: inherit;
    border: 1px solid;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 3px;
        
    &:hover {
        background-color: #3498db;
    }
`;

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
        const style = {};

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => (
                            <Person key={person.id}
                                    name={person.name}
                                    age={person.age}
                                    click={() => this.deletePersonHandler(index)}
                                    changed={(event) => this.nameChangeHandler(event, person.id)}/>
                        ))
                    }
                </div>
            );

            style.backgroundColor = '#c23616';
            style[':hover'] = {
                backgroundColor: '#e74c3c'
            }
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('purple');
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className='App'>
                <h1>Hi, I'm React App.</h1>
                <p className={classes.join(' ')}>Click button to display the list of persons</p>
                <StyleButton onClick={this.togglePersonsHandler}>
                    Toggle List
                </StyleButton>
                { persons }
            </div>
        )
    }
}

export default App;
