export function createStore(reducer, initialState) {
    let state = {
        messages: initialState
    };

    const getState = () => (state);

    const dispatch = (action) => {
        state = reducer(state, action);
    };

    return {
        getState,
        dispatch
    };
}