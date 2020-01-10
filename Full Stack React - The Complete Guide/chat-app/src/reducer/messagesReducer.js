import uuid from 'uuid';

export function messagesReducer(state, action) {
    if (action.type === 'ADD_MESSAGE') {
        const newMessage = {
            text: action.text,
            timestamp: Date.now(),
            id: uuid.v4()
        };

        return state.concat(newMessage);
    } else {
        return state;
    }
}