import uuid from 'uuid';

export function messagesReducer(state, action) {
    if (action.type === 'ADD_MESSAGE') {
        const newMessage = {
            text: action.text,
            timestamp: Date.now(),
            id: uuid.v4()
        };

        return state.concat(newMessage);
    } else if (action.type === 'DELETE_MESSAGE') {
        return state.filter((message) => {
            return message.id !== action.id
        })
    } else {
        return state;
    }
}