import React from 'react';
import {createStore} from "./store/store";
import {reducer} from "./store/reducer";
import MessageInput from "./components/MessageInput";
import MessageView from "./components/MessageView";

const initialState = { messages: [] };
export const store = createStore(reducer, initialState);

class App extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        const messages = store.getState().messages;

        return (
            <div className='ui segment'>
                <MessageView messages={messages}/>
                <MessageInput/>
            </div>
        );
    }
}

export default App;