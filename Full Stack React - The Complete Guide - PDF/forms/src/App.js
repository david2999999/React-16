import React from 'react';
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducer/reducer";
import thunkMiddleware from 'redux-thunk';
import ReduxForm from "./components/container/ReduxForm";
import {Provider} from "react-redux/src";
import {fetchPeople} from "./action/fetchRequest";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

class App extends React.Component {
    componentWillMount() {
        store.dispatch(fetchPeople());
    }

    render() {
        return (
            <Provider store={store}>
                <ReduxForm/>
            </Provider>
        )
    }
}

export default App;