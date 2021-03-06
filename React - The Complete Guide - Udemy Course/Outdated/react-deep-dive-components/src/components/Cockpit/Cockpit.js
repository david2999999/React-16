import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {

    // By default, it runs both after the first render and after every update
    useEffect(() => {
        console.log('[Cockpit.components] useEffect');
        const timer = setTimeout(() => {       // Http request
            alert('Saved Data to Cloud.');
        }, 1000);

        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.components] cleanup work in useEffect');
        };
    }, [props.persons]); // passing in [] means the useEffect will only run once.

    // you can use useEffect more than once in components.
    // useEffect();
    useEffect(() => {
       console.log('[Cockpit.components] Second useEffect');

        return () => {
            console.log('[Cockpit.components] cleanup work in 2nd useEffect');
        };
    });

    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = styles.Red;
    }

    const classes = [];
    if (props.personsLength <= 2) {
        classes.push(styles.red);
    }
    if (props.personsLength <= 1) {
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

export default React.memo(cockpit);