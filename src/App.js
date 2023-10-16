import logo from './logo.svg';
import './App.css';
import EditarPerfil from './componentes/EditarPerfil';
import { userState, userEffect } from 'react';



function App() {
  return (
    <div className="App">
      <EditarPerfil/>

    </div>
    
  );
}


export default App;