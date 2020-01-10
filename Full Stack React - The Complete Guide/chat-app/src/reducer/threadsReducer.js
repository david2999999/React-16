import { messagesReducer } from "./messagesReducer";

export function threadsReducer(state, action) {
    if (action.type === 'ADD_MESSAGE') {
        const threadIndex = state.findIndex((t) => {
            return t.id === action.threadId;
        });

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