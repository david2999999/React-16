import React from 'react';

class BasicInput extends React.Component {
    state = {
        names: []
    };

    onFormSubmit = (evt) => {
        const name = this.refs.name.value;
        const names = [...this.state.names, name];
        this.setState({
            names: names
        });
        this.refs.name.value = '';
        evt.preventDefault();
    };

    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder='Name' ref='name'/>
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