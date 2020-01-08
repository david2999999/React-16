import React from 'react';
import { store } from "../App";

class MessageView extends React.Component {
    handleClick = (id) => {
        store.dispatch({
            type: 'DELETE_MESSAGE',
            id: id
        });
    };

    render() {
        const messages = this.props.messages.map((message, index) => (
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
            <div className='ui comments'>
                { messages }
            </div>
        )
    }
}

export default MessageView;