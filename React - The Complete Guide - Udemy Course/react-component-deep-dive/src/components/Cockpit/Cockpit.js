import React from "react";
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
    const classes = [];

    if (props.persons.length <= 2) {
        classes.push('purple');
    }

    if (props.persons.length <= 1) {
        classes.push('bold');
    }

    return (
        <div>
            <h1>Hi, I'm React App.</h1>
            <p className={classes.join(' ')}>Click button to display the list of persons</p>
            <StyleButton alt={props.showPersons}
                         onClick={props.clicked}>
                Toggle List
            </StyleButton>
        </div>
    );
};

export default Cockpit;