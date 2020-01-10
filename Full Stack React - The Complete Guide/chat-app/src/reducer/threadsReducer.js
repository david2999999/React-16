import { messagesReducer } from "./messagesReducer";

export function threadsReducer(state = [
    {
        id: '1-fca2',
        title: 'Buzz Aldrin',
        messages: messagesReducer(undefined, {})
    },
    {
        id: '2-be91',
        title: 'Michael Collins',
        messages: messagesReducer(undefined, {})
    }
], action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
        case 'DELETE_MESSAGE': {
            const threadIndex = findThreadIndex(state, action);
            const oldThread = state[threadIndex];
            const newThread = {
                ...oldThread,
                messages: messagesReducer(oldThread.messages, action)
            };

            return [
                ...state.slice(0, threadIndex),
                newThread,
                ...state.slice(threadIndex + 1, state.length)
            ];
        } default: {
            return state;
        }
    }
}

function findThreadIndex(threads, action) {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            return threads.findIndex(
                (t) => t.id === action.threadId
            )
        }
        case 'DELETE_MESSAGE': {
            return threads.findIndex(
                (t) => t.messages.find((m) => (
                    m.id === action.id
                ))
            );
        }
    }
}

// The concat() method is used to merge arrays.
// Concat does not change the existing arrays, but instead returns a new array.