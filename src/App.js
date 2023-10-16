//import './App.css';
import Skill from './components/skill';
import Habilidade from './components/habilidade/habilidade';
import { Multiselect } from './components/multiselect/multiselect';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Skills</h2>
        <div class="flex-container"> 
          <h3>Hard Skills</h3>
        <Multiselect/>
        </div>
        <div>
          <h3>Soft Skills</h3>
        <Multiselect/>
        </div>
      </div>
      <Habilidade/>
    </div>
  );
}

//<Skill/>
export default App;
