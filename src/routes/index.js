import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TelaCadastro from '../pages/tela-cadastro/telaCadastro.js'
import TelaMatch from '../pages/tela-match/telaMatch.js';
import TelaForYou from '../pages/tela-forYou/telaForYou.js';
import TelaAboutUs from '../pages/Home/telaAboutUs.js';
import { TelaPerfil } from '../pages/tela-perfil/telaPerfil.js';
import TelaLogin from '../pages/tela-login/login.js';
import EditProfile from "../pages/tela-perfil/nieto-EditProfile/EditProfile.js"

function WebRoutes() {
    return (
        <div>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<TelaAboutUs />} />
                        <Route path="/match" element={<TelaMatch />} />
                        <Route path="/forYou" element={<TelaForYou />} />
                        <Route path="/:username" element={<TelaPerfil />} />
                        <Route path="/login" element={<TelaLogin />} />
                        <Route path="/cadastro" element={<TelaCadastro />} />
                        <Route path='/:username/editProfile' element={<EditProfile />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export { WebRoutes };