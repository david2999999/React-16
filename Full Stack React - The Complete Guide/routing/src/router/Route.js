import React from "react";
import PropTypes from 'prop-types';

const Route = ({path, component}, { location }) => {
    const pathname = location.pathname;
    if (pathname.match(path)) {
        return (
            React.createElement(component)
        )
    } else {
        return null;
    }
};

Route.contextTypes = {
    location: PropTypes.object
};

export default Route;