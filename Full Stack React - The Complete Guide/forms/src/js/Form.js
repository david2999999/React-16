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
                  />
                  <br/>
                  <Field
                    placeholder='Email'
                    name='email'
                    value={this.state.fields.email}
                    onChange={this.onInputChange}
                    validate={(val) => (isEmail(val) ? false : 'Invalid Email')}
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