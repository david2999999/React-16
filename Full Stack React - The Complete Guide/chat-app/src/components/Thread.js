import React from 'react';
import { store } from "../App";
import MessageInput from "./MessageInput";

class Thread extends React.Component {
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
                <MessageInput threadId={this.props.thread.id}/>
            </div>

        )
    }
}

export default Thread;