import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
    useEffect(() => {
       console.log('[Cockpit.js] useEffect');
       // Http request
    });

    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = styles.Red;
    }

    const classes = [];
    if (props.persons.length <= 2) {
        classes.push(styles.red);
    }
    if (props.persons.length <= 1) {
        classes.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={buttonClass}
                    onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;