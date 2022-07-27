import React, { useState } from 'react';
import Person from "./components/Person/Person";
import './App.css';

const AppReactHooks = (props) => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: 'David', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Steph', age: 32 }
        ],
    });

    const [ otherState, setOtherState ] = useState('some other state');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                { name: 'Davido', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Steph', age: 27 }
            ]
        })
    };

    return (
        <div className='App'>
            <h1>Hi, I'm React App.</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
                My Hobbies: Coding
            </Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    )
};

export default AppReactHooks;

