import React, { useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import './Cockpit.css';
import AuthContext from "../../context/auth-context";

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
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        toggleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js] clean up work in useEffect');
        }
    }, []);
    // passing in [] array to useEffect, means useEffect function will only run 1 time
    // similar to componentDidMount.

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] clean up work in 2nd useEffect');
        }
    });

    // passing in dependencies, so when the dependencies changes, useEffect
    // will run.

    // useEffect() - can have many useEffects in a component

    const classes = [];
    if (props.personsLength <= 2) classes.push('purple');
    if (props.personsLength <= 1) classes.push('bold');

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>Click button to display the list of persons</p>
            <StyleButton alt={props.showPersons ? 1 : 0}
                         onClick={props.clicked}
                         ref={toggleBtnRef}>
                Toggle List
            </StyleButton>
                {<button className='button' onClick={authContext.login}>Log in</button>}
        </div>
    );
};

export default React.memo(Cockpit);