import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaCadastro from './Telas/tela-cadastro/telaCadastro.js'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TelaCadastro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
