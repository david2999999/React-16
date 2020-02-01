import React from 'react';

import {Redirect, Route} from 'react-router-dom';

import { client } from '../Client';

const PrivateRoute = ({component, ...rest}) => (
    <Route {...rest} render={(props) => (
        client.isLoggedIn() ? (
            React.createElement(component, props)
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

export default PrivateRoute;