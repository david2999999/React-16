import React from 'react';
import { store } from "../../App";

class TextFieldSubmit extends React.Component {
    state = {
        value: ''
    };

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    handleSubmit = () => {
        store.dispatch({
            type: 'ADD_MESSAGE',
            text: this.state.value,
            threadId: this.props.threadId
        });

        this.props.onSubmit(this.state.value);
        this.setState({
            value: ''
        });
    };

    render() {
        return (
            <div className='ui input'>
                <input type="text"
                       onChange={this.onChange}
                       value={this.state.value}
                />
                <button type="submit"
                       onClick={this.handleSubmit}
                       className='ui primary button'>
                    Submit
                </button>
            </div>
        )

    }
}

export default TextFieldSubmit;