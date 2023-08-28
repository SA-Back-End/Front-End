//import './App.css';
import Skill from './components/skill';
import Habilidade from './components/habilidade';
import { Multiselect } from './components/multiselect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Multiselect/>
      <Habilidade>
      <Skill/>
      </Habilidade>
    </div>
  );
}

export default App;
