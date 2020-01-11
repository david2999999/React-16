import React from 'react';
import ThreadDisplay from "./components/container/ThreadDisplay";
import ThreadTabs from "./components/container/TreadTabs";

const App = () => {
    return (
        <div className='ui segment'>
            <ThreadTabs/>
            <ThreadDisplay/>
        </div>
    );
};

export default App;