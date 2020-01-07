export function createStore(reducer, initialState) {
    let state = initialState;
    const listeners = [];

    const getState = () => (state.messages);

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
    };

    return {
        subscribe,
        getState,
        dispatch
    };
}
