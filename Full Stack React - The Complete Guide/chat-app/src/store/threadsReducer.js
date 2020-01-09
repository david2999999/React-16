import uuid from 'uuid';

export function reducer(state, action) {
    return {
        activeThreadId: activeThreadIdReducer(state.activeThreadId, action),
        threads: threadsReducer(state.threads, action)
    }
}

function activeThreadIdReducer(state, action) {
    if (action.type === 'OPEN_THREAD') {
        return action.id;
    } else {
        return state;
    }
}

function threadsReducer(state, action) {
    if (action.type === 'ADD_MESSAGE') {
        const newMessage = {
          text: action.text,
          timestamp: Date.now(),
          id: uuid.v4()
        };

        const threadIndex = state.findIndex((t) => {
            return t.id === action.threadId;
        });

        const oldThread = state[threadIndex];
        const newThread = {
            ...oldThread,
            messages: oldThread.messages.concat(newMessage)
        };

        return [
            ...state.slice(0, threadIndex),
            newThread,
            ...state.slice(threadIndex + 1, state.length)
        ];
    } else if (action.type === 'DELETE_MESSAGE') {
         const threadIndex = state.findIndex((t) => (
             t.messages.find((m) => (
                 m.id === action.id
             ))
         ));
         const oldThread = state[threadIndex];
         const newThread = {
             ...oldThread,
             messages: oldThread.messages.filter((m) => (
                 m.id !== action.id
             ))
         };

         return [
            ...state.slice(0, threadIndex),
            newThread,
            ...state.slice(threadIndex + 1, state.length)
         ];
    } else {
        return state;
    }
}

// The concat() method is used to merge arrays.
// Concat does not change the existing arrays, but instead returns a new array.