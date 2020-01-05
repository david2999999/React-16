import React from 'react';
import Field from "./Field";
import isEmail from 'validator/lib/isEmail';

class Form extends React.Component {
    state = {
        fields: {
            name: '',
            email: ''
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
                email: ''
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
                  <input type="submit" disabled={this.validate()}/>
              </form>

              <div>
                  <h3>People</h3>
                  <ul>
                      { this.state.people.map(({ name, email }, index) =>
                        <li key={index}>{name} ({email})</li>
                      )}
                  </ul>
              </div>
          </div>
        );
    }
}

export default Form;