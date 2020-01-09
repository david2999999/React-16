export function activeThreadIdReducer(state, action) {
    if (action.type === 'OPEN_THREAD') {
        return action.id;
    } else {
        return state;
    }
}