import React from 'react';
import './styles/App.css';
import TopBar from './components/TopBar';
import AlbumsContainer from './components/container/AlbumsContainer';
import {Redirect, Route} from 'react-router-dom';

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
        <Route path='/albums' component={AlbumsContainer}/>
        <Route exact path='/' render={() => (
            <Redirect to='/albums'/>
        )}/>
    </div>
  </div>
);

export default App;
