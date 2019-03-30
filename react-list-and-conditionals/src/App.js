import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [ personState, setPersonsState] = useState({
            persons: [
                { name: 'Max', age: 28},
                { name: 'Manu', age: 29},
                { name: 'Stephanie', age: 26}
            ]
        });

    const [otherState, setOtherState] = useState('some other value');
    console.log(personState, otherState);

    const switchNameHandler = (newName) => {
        setPersonsState({
            persons: [
                { name: newName, age: 28},
                { name: 'Manu', age: 29},
                { name: 'Stephanie', age: 27}
            ]
        });
    };

    const nameChangeHandler = (event) => {
        setPersonsState({
            persons: [
                { name: 'David', age: 28},
                { name: event.target.value, age: 29},
                { name: 'Stephanie', age: 27}
            ]
        });
    };

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };
    return (
        <div className="App">
            <h1>Hi, I am a React app</h1>
            <button
                style={style}
                onClick={() => switchNameHandler('David')}>
                Switch Name
            </button>
            <Person
                name={personState.persons[0].name}
                age={personState.persons[0].age}/>
            <Person
                name={personState.persons[1].name}
                age={personState.persons[1].age}
                click={switchNameHandler.bind(this, 'Dav')}
                changed={nameChangeHandler}
            >
                My Hobbies Racing
            </Person>
            <Person
                name={personState.persons[2].name}
                age={personState.persons[2].age}/>
        </div>
    );
};

export default App;
