import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from "prop-types";

const CreateClassMap  = createReactClass({
    propTypes: {
        lat: PropTypes.number,
        lng: PropTypes.number,
        zoom: PropTypes.number,
        place: PropTypes.object,
        markers: PropTypes.array
    },

    render: function() {}
});

export default CreateClassMap;