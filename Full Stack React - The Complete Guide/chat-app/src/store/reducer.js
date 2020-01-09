import uuid from 'uuid';

export function reducer(state, action) {
    if (action.type === 'ADD_MESSAGE') {
        const newMessage = {
          text: action.text,
          timestamp: Date.now(),
          id: uuid.v4()
        };

        const threadIndex = state.threads.findIndex((t) => {
            return t.id === action.threadId;
        });

        const oldThread = state.threads[threadIndex];
        const newThread = {
            ...oldThread,
            messages: oldThread.messages.concat(newMessage)
        };

        return {
            ...state,
            threads: [
                ...state.threads.slice(0, threadIndex),
                newThread,
                ...state.threads.slice(threadIndex + 1, state.threads.length)
            ]
        };
    } else if (action.type === 'DELETE_MESSAGE') {
         const threadIndex = state.threads.findIndex((t) => (
             t.messages.find((m) => (
                 m.id === action.id
             ))
         ));
         const oldThread = state.threads[threadIndex];
         const newThread = {
             ...oldThread,
             messages: oldThread.messages.filter((m) => (
                 m.id !== action.id
             ))
         };

         return  {
            ...state,
            threads: [
                ...state.threads.slice(0, threadIndex),
                newThread,
                ...state.threads.slice(threadIndex + 1, state.threads.length)
            ]
         }
    } else if (action.type === 'OPEN_THREAD') {
        return {
            ...state,
            activeThreadId: action.id
        }
    } else {
        return state;
    }
}

// The concat() method is used to merge arrays.
// Concat does not change the existing arrays, but instead returns a new array.