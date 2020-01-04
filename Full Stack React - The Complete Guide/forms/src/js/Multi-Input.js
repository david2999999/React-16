import React from 'react';

class MultiInput extends React.Component {
    state = {
        fields: {
            name: '',
            email: ''
        },
        people: []
    };

    onFormSubmit = (evt) => {

    };

    onInputChange = (evt) => {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({
            fields
        });
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
                    <input type="text" name='email'
                           placeholder='Email'
                           value={this.state.fields.email}
                           onChange={this.onInputChange}/>
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
        )
    }
}

export default MultiInput;