import React from 'react';
import { createStore } from "redux";
import { reducer } from "./reducer/reducer";
import ThreadDisplay from "./components/container/ThreadDisplay";
import ThreadTabs from "./components/container/TreadTabs";

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