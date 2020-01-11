import React from 'react';
import { createStore } from "redux";
import { reducer } from "./reducer/reducer";
import ThreadDisplay from "./components/ThreadDisplay";
import ThreadTabs from "./components/TreadTabs";

export const store = createStore(reducer);

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
                <ThreadTabs/>
                <ThreadDisplay thread={activeThread}/>
            </div>
        );
    }
}

export default App;