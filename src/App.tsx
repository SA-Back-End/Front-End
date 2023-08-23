import './App.css';
import './components/profile/editProfile'

import EditProfile from './components/profile/editProfile';
import Followers from './components/profile/followers';
import Status from './components/profile/status';

function App() {  
  return (
    <div className='Body'>
      <div className='Rectangle'>
        <EditProfile/>
        <Followers/>
        <Status/>
      </div>
    </div>
  );
}

export default App;
