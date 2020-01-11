import React from 'react';
import {MessageList} from "./MessageList";
import TextFieldSubmit from "./generic/TextFieldSubmit";

export const Thread = (props) => (
    <div className='ui center align basic segment'>
        <MessageList messages={props.thread.messages}
            onClick={props.onMessageClick}
        />
        <TextFieldSubmit
            onSubmit={props.onMessageSubmit}
        />
    </div>
);