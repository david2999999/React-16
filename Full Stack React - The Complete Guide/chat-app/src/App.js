import React from 'react';
import { createStore } from "redux";
import { reducer } from "./reducer/reducer";
import { initialState } from "./js/data";
import Thread from "./components/Thread";
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

        const tabs = threads.map(t => (
            {
                title: t.title,
                active: t.id === activeThreadId,
                id: t.id
            }
        ));

        return (
            <div className='ui segment'>
                <ThreadTabs tabs={tabs}/>
                <Thread thread={activeThread}/>
            </div>
        );
    }
}

export default App;