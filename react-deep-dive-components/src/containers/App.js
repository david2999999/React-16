import React, {Component} from 'react';
import styles from '../App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from "../hoc/WithClass";

class App extends Component {
    constructor(props) {    // constructor method only runs one time during component initialization
        super(props);
        console.log('[App.js] constructor');
        this.state = {
            persons: [
                {id: '1123124', name: 'Max', age: 28},
                {id: '12412', name: 'Manu', age: 29},
                {id: '522', name: 'Stephanie', age: 26}
            ],
            otherState: 'some other value',
            showPersons: false,
            showCockpit: true
        };
    }

    static getDerivedStateFromProps(props, state) {
        // this lifecycle always runs, after constructor and any update to the component
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {   // this lifecycle runs once after render completes
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate() {
        // this lifecycle runs when there are changes to the component (before the render)
        // returns true or false depending if the component should update
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        // this lifecycle runs after the component updates (After the render)
        console.log('[App.js] componentDidUpdate');
    }

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
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                            persons={this.state.persons}
                            clicked={this.deletePersonHandler}
                            changed={this.nameChangedHandler}
                        />
        }

        return (
            <Aux>
                <button onClick={() => {
                    this.setState({showCockpit: false});
                }}>Remove Cockpit</button>

                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonsHandler}
                    />
                ) : null}

                {persons}
            </Aux>
        );
    }
}

export default withClass(App, styles.App);
