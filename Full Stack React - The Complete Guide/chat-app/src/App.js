import React from 'react';
import { createStore } from "redux";
import { reducer } from "./store/reducer";
import Thread from "./components/Thread";
import { initialState } from "./js/data";


export const store = createStore(reducer, initialState);

class App extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        const state = store.getState();
        const activeThreadId = state.activeThreadId;
        const threads = state.threads;
        const activeThread = threads.find((t) => t.id === activeThreadId);

        return (
            <div className='ui segment'>
                <Thread thread={activeThread}/>
            </div>
        );
    }
}

export default App;