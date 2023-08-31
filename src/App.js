import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaCadastro from './Telas/tela-cadastro/telaCadastro.js'
import TelaMatch from './Telas/tela-match/telaMatch.js';
import TelaForYou from './Telas/tela-forYou/telaForYou.js';
import TelaAboutUs from './Telas/tela-aboutUs/telaAboutUs.js';
import { TelaPerfil } from './Telas/tela-perfil/telaPerfil.js';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TelaCadastro />} />
          <Route path="/match" element={<TelaMatch />} />
          <Route path="/forYou" element={<TelaForYou />} />
          <Route path="/aboutUs" element={<TelaAboutUs />} />
          <Route path="/perfil" element={<TelaPerfil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
