import uuid from 'uuid';

export function reducer(state, action) {
    if (action.type === 'ADD_MESSAGE') {
        const newMessage = {
          text: action.text,
          timestamp: Date.now(),
          id: uuid.v4()
        };

        return {
            messages: state.messages.concat(newMessage)
        };
    } else if (action.type === 'DELETE_MESSAGE') {
         return  {
            messages: state.messages.filter((m) => (
                m.id !== action.id
            ))
         }
    } else {
        return state;
    }
}

// The concat() method is used to merge arrays.
// Concat does not change the existing arrays, but instead returns a new array.