import Habilidade from './components/componentesLele/habilidadeL';
import Skill from './components/skill';
import Formacao from './components/formacaoModal';
import { Multiselect } from './components/multiselect';
import './App.css'



function App() {
  return (
    <div className="App">
      <h2>Skills</h2>
      <div class="flex-container">
        <div className='skill-item'>
          <h3>Hard Skills</h3>
        <Multiselect/>
        </div>
        <div className='skill-item'>
          <h3>Soft Skills</h3>
        <Multiselect/>
        </div>
      </div>  
      <Habilidade/>
      <Formacao/>
      
    </div>
  )
}




//<Skill/>
export default App;

