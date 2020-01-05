import React from 'react';
import Field from "../components/Field";
import isEmail from 'validator/lib/isEmail';
import CourseSelect from "../components/CourseSelect";

class CourseForm extends React.Component {
    render() {
        return (
            <div>
                <h1>Course Form</h1>
                <CourseSelect
                    onChange='asd'
                />
            </div>
        );
    }
}

export default CourseForm;