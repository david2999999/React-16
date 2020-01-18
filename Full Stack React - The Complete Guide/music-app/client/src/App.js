import React from 'react';

import TopBar from './components/TopBar';
import AlbumsContainer from './components/AlbumsContainer';

import './styles/App.css';

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
      <AlbumsContainer />
    </div>
  </div>
);

export default App;
