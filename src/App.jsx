import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Atividades from './components/profile/Atividades';
import Bio from './components/profile/Bio';
import Certificados from './components/profile/Certificados';
import Formacao from './components/profile/Formacao';
import Experiencias from './components/profile/Experiencias';
import Projetos from './components/profile/Projetos';

function App() {

  const user={name: 'Nic', userName: 'NicNic'}

  return (
    <div>
      {/* <Formacao></Formacao>
      <Bio></Bio>*/}
      {/* <Atividades></Atividades> */}
      <Experiencias></Experiencias>
      <Certificados></Certificados>
      {/*<Projetos user={user}></Projetos>*/}
    </div>
  );
}

export default App;
