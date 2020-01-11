import React from 'react';
import ReactDOM from "react-dom";
import '../node_modules/semantic-ui-css/semantic.min.css';
import WrappedApp from "./components/container/WrapperApp";

ReactDOM.render(
    <WrappedApp/>,
    document.getElementById('content')
);