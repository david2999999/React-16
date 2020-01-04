import React from 'react';

class BasicInput extends React.Component {
    render() {
        return (
            <div>
                <h1>Sign Up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder='Name' ref='name'/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default BasicInput;