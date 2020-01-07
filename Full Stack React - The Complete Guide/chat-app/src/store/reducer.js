export function reducer(state, action) {
    if (action.type === 'ADD_MESSAGE') {
        return {
            messages: state.messages.concat(action.message)
        };
    } else {
        return state;
    }
}

// The concat() method is used to merge arrays.
// Concat does not change the existing arrays, but instead returns a new array.