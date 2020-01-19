import React from 'react';
import './styles/App.css';
import TopBar from './components/TopBar';
import AlbumsContainer from './components/container/AlbumsContainer';
import {Redirect, Route} from 'react-router-dom';
import Login from "./components/container/Login";
import Logout from "./components/button/Logout";
import PrivateRoute from "./components/PrivateRoute";

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
        <PrivateRoute path='/albums' component={AlbumsContainer}/>
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
        <Route exact path='/' render={() => (
            <Redirect to='/albums'/>
        )}/>
    </div>
  </div>
);

export default App;
