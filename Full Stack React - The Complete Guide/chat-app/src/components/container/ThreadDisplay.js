import React from 'react';
import { store } from "../../App";
import {Thread} from "../Thread";

const mapStateToThreadProps = (state) => (
    {
        thread: state.threads.find(
            t => t.id === state.activeThreadId
        )
    }
);

const mapDispatchToThreadProps = (dispatch) => (
    {
        onMessageClick: (id) => (
            dispatch({
                type: 'DELETE_MESSAGE',
                id: id
            })
        ),
        dispatch: dispatch
    }
);

const mergeThreadProps = (stateProps, dispatchProps) => (
    {
        ...stateProps,
        ...dispatchProps,
        onMessageSubmit: (text) => (
            dispatchProps.dispatch({
                type: 'ADD_MESSAGE',
                text: text,
                threadId: stateProps.thread.id
            })
        )
    }
);


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