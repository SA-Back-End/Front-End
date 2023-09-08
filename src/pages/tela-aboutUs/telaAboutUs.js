import React from 'react';
import './telaAboutUs.css';
import logo from './img/logo.ico';

const TelaAboutUs = () => {
    return (
        <div>
            <div className='tela-principal'>
                <header className='header-aboutUs'>

                    <div class="container">
                        <img src={logo} alt="logo" class="img-logo" />
                        <span className='icon-skills'><b>Skills</b></span>
                    </div>

                    <nav className='nav-links'>
                        <ul className='links-toOtherPages'>
                            <li><a href="/" className='options-links'>Quem somos?</a></li>
                            <li><a href="/cadastro" className='options-links'>Cadastre-se</a></li>
                            <li><a href="/login" className='options-links'>Login</a></li>
                        </ul>
                    </nav>

                </header>

                <div class="div-center">
                    <h1 className='skills'>Skills</h1>
                    <p className='merchan'>Encontre os parceiros <span className='span-aboutUs'>ideais</span> para os seus projetos</p>
                    <button type="button" className='btn-saibaMais' href="#main">Saiba mais</button>
                </div>
            </div>

            <div id='main'>
                <div id='container2'>
                    <h1>Mais controle, mais interação!</h1>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                </div>
                <div id='imgTemplate'>
                    <p>IMAGEM</p>
                </div>
            </div>
        </div>
    );
}

export default TelaAboutUs;