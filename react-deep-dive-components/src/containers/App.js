import React, {Component} from 'react';
import styles from '../App.module.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
    state = {
        persons: [
            {id: '1123124', name: 'Max', age: 28},
            {id: '12412', name: 'Manu', age: 29},
            {id: '522', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        //const person = Object.assign({}, this.state.persons[personIndex]);
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        let persons = null;
        let buttonClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );

            buttonClass = styles.Red;
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push(styles.red);
        }

        if (this.state.persons.length <= 1) {
            classes.push(styles.bold);
        }

        return (
            <div className={styles.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button className={buttonClass}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
