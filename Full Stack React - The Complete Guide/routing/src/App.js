import React from 'react';
import Atlantic from "./components/Atlantic";
import Pacific from "./components/Pacific";
import BlackSea from "./components/BlackSea";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

const App = () => (
    <Router>
        <div className='ui text container'>
            <h2 className='ui dividing header'>
                Which body of water?
            </h2>
            <ul>
                <li>
                    <Link to='/atlantic'>
                        <code>/atlantic</code>
                    </Link>
                </li>
                <li>
                    <Link to='/pacific'>
                        <code>/pacific</code>
                    </Link>
                </li>
                <li>
                    <Link to='/black-sea'>
                        <code>/black-sea</code>
                    </Link>
                </li>
            </ul>
            <hr/>

            <Route path='/atlantic' component={Atlantic} />
            <Route path='/pacific' component={Pacific} />
            <Route path='/black-sea' component={BlackSea}/>
        </div>
    </Router>
);

export default App;
