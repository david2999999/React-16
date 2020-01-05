import React from 'react';
import Field from "../components/Field";
import isEmail from 'validator/lib/isEmail';
import CourseSelect from "../components/CourseSelect";

class CourseForm extends React.Component {
    state = {
        fields: {
            name: '',
            email: '',
            department: '',
            course: ''
        },
        fieldErrors: {},
        people: []
    };

    onInputChange = ({ name, value, error }) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({
            fields, fieldErrors
        });
    };

    onFormSubmit = (evt) => {
        const people = this.state.people;
        const person = this.state.fields;

        evt.preventDefault();

        if (this.validate()) return;

        this.setState({
            people: people.concat(person),
            fields: {
                name: '',
                email: '',
                department: '',
                course: ''
            }
        });
    };

    validate() {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errorMessages = Object.keys(fieldErrors).filter((k) => {
            return fieldErrors[k];
        });

        if (!person.name) return true;
        if (!person.email) return true;
        if (!person.course) return true;
        if (!person.department) return true;
        if (errorMessages.length) return true;

        return errorMessages.length;
    }

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <Field
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                        validate={(val) => (val ? false : 'Name Required')}
                        error={this.state.fieldErrors['name']}
                    />
                    <br/>
                    <Field
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={(val) => (isEmail(val) ? false : 'Invalid Email')}
                        error={this.state.fieldErrors['email']}
                    />
                    <br/>

                    <CourseSelect
                        department={this.state.fields.department}
                        course={this.state.fields.course}
                        onChange={this.onInputChange}
                    />
                    <br/>

                    <input type="submit" disabled={this.validate()}/>
                </form>

                <div>
                    <h3>People</h3>
                    <ul>
                        { this.state.people.map(({ name, email, department, course }, index) =>
                            <li key={index}>{[ name, email, department, course ].join(' - ')}</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CourseForm;