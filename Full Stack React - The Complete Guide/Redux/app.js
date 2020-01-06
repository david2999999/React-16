import { reducer } from './Reducer/Initial-Reducer';

const incrementAction = {
    type: 'INCREMENT'
};

console.log(reducer(0, incrementAction));
console.log(reducer(1, incrementAction));
console.log(reducer(5, incrementAction));

const unknownAction = {
    type: 'UNKNOWN'
};

console.log(reducer(5, unknownAction));
console.log(reducer(8, unknownAction));