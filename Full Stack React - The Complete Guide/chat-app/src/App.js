import React from 'react';
import {createStore} from "./store/store";
import {reducer} from "./store/reducer";

const initialState = { messages: [] };
const store = createStore(reducer, initialState);

class App extends React.Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }
}

export default App;