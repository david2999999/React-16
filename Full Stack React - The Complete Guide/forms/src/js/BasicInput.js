import React from 'react';

class BasicInput extends React.Component {
    state = {
        name: '',
        names: []
    };

    onFormSubmit = (evt) => {
        const names = [...this.state.names, this.state.name];
        this.setState({
            names: names,
            name: ''
        });
        evt.preventDefault();
    };

    onNameChange = (evt) => {
        this.setState({
            name: evt.target.value
        });
    };

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder='Name'
                           onChange={this.onNameChange}
                           value={this.state.name}/>
                    <input type="submit"/>
                </form>
                <br/>
                <div>
                    <h3>Names</h3>
                    <ul>
                        { this.state.names.map((name, index) => (
                            <li key={index}>{name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BasicInput;