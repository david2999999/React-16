import React from 'react';
import PropTypes from 'prop-types';

class CourseSelect extends React.Component {
    static propTypes = {
        department: PropTypes.string,
        course: PropTypes.string,
        onChange: PropTypes.func.isRequired
    };

    state = {
        department: null,
        course: null,
        courses: [],
        _loading: false
    };


}

export default CourseSelect;