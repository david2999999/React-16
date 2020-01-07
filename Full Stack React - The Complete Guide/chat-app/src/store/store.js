export function createStore(reducer, initialState) {
    let state = initialState;

    const getState = () => (state.messages);

    const dispatch = (action) => {
        state = reducer(state, action);
    };

    return {
        getState,
        dispatch
    };
}

