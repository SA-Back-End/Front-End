import Habilidade from './components/componentesLele/habilidadeL';
import Skill from './components/skill';
import Formacao from './components/formacaoModal';
import { Multiselect } from './components/multiselect';
import React, { useState } from 'react';
import './App.css'



function App() {
  const [isOnAddMode, setIsOnAddMode] = useState(false);

  const mostraSkill = () => {
    setIsOnAddMode(!isOnAddMode);
  };

  return (
    <div className="App">
      <h2>Skills</h2>
      <button className="botaoAzul" onClick={mostraSkill}>
        {isOnAddMode ? 'Fechar' : 'Adicionar'}
      </button>
      {isOnAddMode && (
        <div className="flex-container skillsSelect">
          <div className='skill-item'>
            <h3>Hard Skills</h3>
            <Multiselect /> {/* Certifique-se de importar o componente Multiselect corretamente */}
          </div>
          <div className='skill-item'>
            <h3>Soft Skills</h3>
            <Multiselect /> {/* Certifique-se de importar o componente Multiselect corretamente */}
          </div>
        </div>
      )}
      
      <div className='flex-container'>
      <div className='skill-item'>
          <h3>Hard Skills</h3>
            <div className="show-skills">
              <p>mostra</p>
            </div>
        </div>
        <div className='skill-item'>
          <h3>Soft Skills</h3>
          <div className="show-skills">
              <p>mostra</p>
          </div>
        </div>
      </div> 
      <Habilidade/>
      <Formacao/>
      
    </div>
  )
}




//<Skill/>
export default App;

