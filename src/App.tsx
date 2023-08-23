import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/profile/editProfile'

import EditProfile from './components/profile/editProfile';
import Followers from './components/profile/followers';
import Status from './components/profile/status';

function App() {  
  return (
    <div>
      <EditProfile/>
      <Followers/>
      <Status/>
    </div>
  );
}

export default App;
