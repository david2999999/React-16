import {createStore} from "../store/store";
import {threadsReducer} from "../reducer/threadsReducer";

const initialState = { messages: [] };
const store = createStore(threadsReducer, initialState);

const listener = () => {
    console.log(`Current State = [ ${store.getState()} ]`);
};
store.subscribe(listener);

const addMessageAction1 = {
    type: 'ADD_MESSAGE',
    message: 'How do you read?'
};
store.dispatch(addMessageAction1);

const addMessageAction2 = {
    type: 'ADD_MESSAGE',
    message: 'I read you loud and clear'
};
store.dispatch(addMessageAction2);

const deleteMessageAction = {
    type: 'DELETE_MESSAGE',
    index: 0
};
store.dispatch(deleteMessageAction);
