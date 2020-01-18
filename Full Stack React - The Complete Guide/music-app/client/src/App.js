import React from 'react';
import './styles/App.css';
import TopBar from './components/TopBar';
import AlbumsContainer from './components/container/AlbumsContainer';
import {Route} from 'react-router-dom';

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
        <Route path='/albums' component={AlbumsContainer}/>
    </div>
  </div>
);

export default App;
