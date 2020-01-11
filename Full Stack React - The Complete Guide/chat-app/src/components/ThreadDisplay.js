import React from 'react';
import { store } from "../App";
import TextFieldSubmit from "./generic/TextFieldSubmit";
import {Thread} from "./Thread";

class ThreadDisplay extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        const state = store.getState();
        const activeThreadId = state.activeThreadId;
        const threads = state.threads;
        const activeThread = threads.find((t) => t.id === activeThreadId);

        return (
            <Thread thread={activeThread}
                onMessageClick={(id) => (
                    store.dispatch({
                        type: 'DELETE_MESSAGE',
                        id: id
                    })
                )}

                onMessageSubmit={(text) => (
                    store.dispatch({
                        type: 'ADD_MESSAGE',
                        text: text,
                        threadId: activeThreadId
                    })
                )}
            />
        )
    }
}

export default ThreadDisplay;