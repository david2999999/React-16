import { reducer } from '../Reducer/Initial-Reducer';

const incrementAction = {
    type: 'INCREMENT',
    amount: 5
};

console.log(reducer(0, incrementAction));
console.log(reducer(1, incrementAction));
console.log(reducer(5, incrementAction));

const unknownAction = {
    type: 'UNKNOWN'
};

console.log(reducer(5, unknownAction));
console.log(reducer(8, unknownAction));

const decrementAction = {
    type: 'DECREMENT',
    amount: 11
};

console.log(reducer(100, decrementAction));
console.log(reducer(9, decrementAction));