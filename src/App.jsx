import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Atividades from './components/profile/Atividades';
import Bio from './components/profile/Bio';
import Certificados from './components/profile/Certificados';
import Formacao from './components/profile/Formacao';
import Projetos from './components/profile/Projetos';

function App() {

  const user={name: 'Nic', userName: 'NicNic'}

  return (
    <div>
      {/* <Formacao></Formacao>
      <Bio></Bio>
      <Certificados></Certificados>
      <Atividades></Atividades> */}
      <Projetos user={user}></Projetos>
    </div>
  );
}

export default App;
