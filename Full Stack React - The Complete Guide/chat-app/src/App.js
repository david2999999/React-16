import React from 'react';
import { createStore } from "redux";
import { reducer } from "./reducer/reducer";
import ThreadDisplay from "./components/ThreadDisplay";
import ThreadTabs from "./components/TreadTabs";

export const store = createStore(reducer);

const App = () => {
    return (
        <div className='ui segment'>
            <ThreadTabs/>
            <ThreadDisplay/>
        </div>
    );
};

export default App;