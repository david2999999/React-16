// not used anymore, currently using the store from redux module
export function createStore(reducer, initialState) {
    let state = initialState;
    const listeners = [];

    const getState = () => (state);

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

