import React from 'react';
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducer/reducer";
import thunkMiddleware from 'redux-thunk';
import ReduxForm from "./components/container/ReduxForm";
import {Provider} from "react-redux/src";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxForm/>
            </Provider>
        )
    }
}

export default App;