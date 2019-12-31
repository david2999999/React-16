import React from 'react';
import ReactDOM from "react-dom";
import '../node_modules/semantic-ui-css/semantic.min.css';
import { TimersDashboard } from "./js/TimersDashboard";

ReactDOM.render(
    <TimersDashboard/>,
    document.getElementById('content')
);