import React from "react";
import styles from '../Switch.css';

const Choice = function (props) {
    const cssClasses = ['choice'];

    if (props.active) {
        cssClasses.push(styles.active);
    }

    return (
        <div className={cssClasses}
            onClick={props.onClick}>
            {props.label}
        </div>
    )
};

export default Choice;