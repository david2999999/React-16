import React from 'react';
import { createStore } from "redux";
import { reducer } from "./store/reducer";
import MessageInput from "./components/MessageInput";
import MessageView from "./components/MessageView";
import { initialState } from "./js/data";


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