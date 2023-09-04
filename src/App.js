import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaCadastro from './Pages/tela-cadastro/telaCadastro.js'
import TelaMatch from './Pages/tela-match/telaMatch.js';
import TelaForYou from './Pages/tela-forYou/telaForYou.js';
import TelaAboutUs from './Pages/tela-aboutUs/telaAboutUs.js';
import { TelaPerfil } from './Pages/tela-perfil/telaPerfil.js';
import TelaLogin from './Pages/tela-login/login.js';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TelaAboutUs />} />
          <Route path="/match" element={<TelaMatch />} />
          <Route path="/forYou" element={<TelaForYou />} />
          <Route path="/aboutUs" element={<TelaAboutUs />} />
          <Route path="/perfil" element={<TelaPerfil />} />
          <Route path="/login" element={<TelaLogin />} />
          <Route path="/cadastro" element={<TelaCadastro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
