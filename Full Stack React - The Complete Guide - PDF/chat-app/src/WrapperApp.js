import React from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer/reducer";
import App from "./App";

const store = createStore(reducer);

const WrappedApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default WrappedApp;