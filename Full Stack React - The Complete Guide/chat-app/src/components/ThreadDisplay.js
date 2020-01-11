import React from 'react';
import { store } from "../App";
import TextFieldSubmit from "./generic/TextFieldSubmit";

class ThreadDisplay extends React.Component {
    handleClick = (id) => {
        store.dispatch({
            type: 'DELETE_MESSAGE',
            id: id
        });
    };

    render() {
        const messages = this.props.thread.messages.map((message, index) => (
            <div className='comment'
                 key={index}
                 onClick={() => this.handleClick(message.id)}>
               <div className='text'>
                   {message.text}
                   <span className='metadata'>@{message.timestamp}</span>
               </div>
            </div>
        ));

        return (
            <div>
                <div className='ui comments'>
                    { messages }
                </div>
                <TextFieldSubmit threadId={this.props.thread.id}/>
            </div>

        )
    }
}

export default ThreadDisplay;