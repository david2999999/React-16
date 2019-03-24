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

    return (
        <div className="App">
            <h1>Hi, I am a React app</h1>
            <button onClick={() => switchNameHandler('David')}>Switch Name</button>
            <Person
                name={personState.persons[0].name}
                age={personState.persons[0].age}/>
            <Person
                name={personState.persons[1].name}
                age={personState.persons[1].age}
                click={switchNameHandler.bind(this, 'Dav')}
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
