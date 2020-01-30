import {reducer} from "../Reducer/Initial-Reducer";
import {createStore} from "../Reducer/Reducer-with-Store";

const store = createStore(reducer);

const incrementAction = {
    type: 'INCREMENT',
    amount: 3
};

store.dispatch(incrementAction);
console.log(store.getState());

store.dispatch(incrementAction);
console.log(store.getState());

const decrementAction = {
    type: 'DECREMENT',
    amount: 4
};

store.dispatch(decrementAction);
console.log(store.getState());

