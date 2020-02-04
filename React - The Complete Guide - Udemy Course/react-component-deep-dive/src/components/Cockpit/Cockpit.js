import React, { useEffect } from "react";
import styled from "styled-components";
import './Cockpit.css';

const StyleButton = styled.button`
    background-color: ${props => props.alt ? '#d35400' : '#2980b9'};
    color: white;
    font: inherit;
    border: 1px solid;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 3px;
        
    &:hover {
        background-color: ${props => props.alt ? '#e67e22' : '#3498db'};
    }
`;

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        setTimeout(() => {
            alert('Saved data to cloud.');
        }, 1000);
    }, []);

    // passing in dependencies, so when the dependencies changes, useEffect
    // will run.

    // passing in [] array to useEffect, means useEffect function will only run 1 time
    // similar to componentDidMount.

    // useEffect() - can have many useEffects in a component

    const classes = [];
    if (props.persons.length <= 2) classes.push('purple');
    if (props.persons.length <= 1) classes.push('bold');

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>Click button to display the list of persons</p>
            <StyleButton alt={props.showPersons ? 1 : 0}
                         onClick={props.clicked}>
                Toggle List
            </StyleButton>
        </div>
    );
};

export default Cockpit;