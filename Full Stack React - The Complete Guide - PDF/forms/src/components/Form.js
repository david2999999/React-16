import React from 'react';
import Field from "./Field";
import isEmail from 'validator/lib/isEmail';
import CourseSelect from "./CourseSelect";
import PropTypes from 'prop-types';

class Form extends React.Component {
    static propTypes = {
        people: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
        saveStatus: PropTypes.string.isRequired,
        fields: PropTypes.object,
        onSubmit: PropTypes.func.isRequired
    };

    state = {
        fields: this.props.fields || {
            name: '',
            email: '',
            course: null,
            department: null
        },
        fieldErrors: {}
    };

    componentWillReceiveProps(update) {
        this.setState({ fields: update.fields })
    }

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
        const person = this.state.fields;

        evt.preventDefault();
        if (this.validate()) return;

        this.props.onSubmit([
            ...this.props.people,
            person
        ]);
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
        if (this.props.isLoading) {
            return <img alt="loading" src='/images/loading.gif'/>
        }

        const dirty = Object.keys(this.state.fields).length;
        let status = this.props.saveStatus;
        if (status === 'SUCCESS' && dirty) status = 'READY';

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

                    {{
                        SAVING: <input value='Saving...' type='submit' disabled/>,
                        SUCCESS: <input value='Saved!' type='submit' disabled/>,
                        ERROR: <input
                            value='Save Failed - Retry?'
                            type='submit'
                            disabled={this.validate()}
                        />,
                        READY: <input
                            value='Submit'
                            type='submit'
                            disabled={this.validate()}
                        />
                    }[status]}
                </form>

                <div>
                    <h3>People</h3>
                    <ul>
                        { this.props.people.map(({ name, email, department, course }, index) =>
                            <li key={index}>{[ name, email, department, course ].join(' - ')}</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Form;