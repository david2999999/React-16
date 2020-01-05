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

    componentWillReceiveProps(update) {
        this.setState({
            department: update.department,
            course: update.course
        });
    }

    onSelectDepartment = () => {

    };

    renderDepartmentSelect = () => {
        return (
            <select onChange={this.onSelectDepartment}
                value={this.state.department || ''}
            >
                <option value=''>
                    Which Department?
                </option>
                <option value="core">
                    NodeSchool: Core
                </option>
                <option value='electives'>
                    NodeSchool: Electives
                </option>
            </select>
        )
    };


    render() {
        return (
            <div>
                { this.renderDepartmentSelect() }
                <br/>
                { this.renderCourseSelect() }
            </div>
        )
    }

}

export default CourseSelect;