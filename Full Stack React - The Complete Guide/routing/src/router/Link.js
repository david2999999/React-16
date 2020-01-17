import React from "react";
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const Link = ({ to, children }) => (
    <a onClick={(e) => {
        e.preventDefault();
        history.push(to);
    }}>
        { children }
    </a>
);

export default Link;