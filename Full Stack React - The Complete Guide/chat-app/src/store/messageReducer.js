function reducer(state, action) {
    if (action.type === 'ADD_MESSAGE') {
        return {
            messages: state.messages.concat(action.message)
        };
    } else {
        return state;
    }
}