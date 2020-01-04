import React from 'react';
import isEmail from 'validator/lib/isEmail';

class MultiInput extends React.Component {
    state = {
        fields: {
            name: '',
            email: ''
        },
        fieldErrors: {},
        people: []
    };

    onFormSubmit = (evt) => {
        const people = [...this.state.people];
        const person = this.state.fields;
        const fieldErrors = this.validate(person);
        this.setState({
            fieldErrors
        });
        evt.preventDefault();

        if (Object.keys(fieldErrors).length) return;

        this.setState({
            people: people.concat(person),
            fields: {
                name: '',
                email: ''
            }
        });
    };

    onInputChange = (evt) => {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({
            fields
        });
    };

    validate = (person) => {
        const errors = {};
        if (!person.name) errors.name = 'Name Required';
        if (!person.email) errors.email = 'Email Required';
        if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email';
        return errors;
    };

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name='name'
                           placeholder='Name'
                           onChange={this.onInputChange}
                           value={this.state.fields.name}/>
                    <span style={{ color: 'red' }}>
                        { this.state.fieldErrors.name }
                    </span>

                    <input type="text" name='email'
                           placeholder='Email'
                           value={this.state.fields.email}
                           onChange={this.onInputChange}/>
                    <span style={{ color: 'red' }}>
                        { this.state.fieldErrors.email }
                    </span>

                    <input type="submit"/>
                </form>
                <br/>
                <div>
                    <h3>People</h3>
                    <ul>
                        { this.state.people.map( ({ name, email }, index) => (
                            <li key={index}>{name} ({email})</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default MultiInput;