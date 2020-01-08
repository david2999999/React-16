import {createStore} from "../store/store";
import {reducer} from "../store/reducer";

const initialState = { messages: [] };
const store = createStore(reducer, initialState);

const addMessageAction1 = {
    type: 'ADD_MESSAGE',
    message: 'How does it look, Neil?'
};


store.dispatch(addMessageAction1);
const stateV1 = store.getState();

const addMessageAction2 = {
    type: 'ADD_MESSAGE',
    message: 'Looking good'
};

store.dispatch(addMessageAction2);
const stateV2 = store.getState();

console.log(`State v1: [ ${stateV1} ]`);
console.log(`State v2: [ ${stateV2} ]`);

const deleteMessageAction = {
    type: 'DELETE_MESSAGE',
    index: 0
};

store.dispatch(deleteMessageAction);
const stateV3 = store.getState();

console.log(`State v3: [ ${stateV3} ]`);