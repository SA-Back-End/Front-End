import React from 'react';
import './telaAboutUs.css';
import Logo from './img/logo.ico';

const TelaAboutUs = () => {
    return (
        <div className='tela-principal'>
            <header className='header-aboutUs'>
                <div class="container">
                    <img src={Logo} alt="logo" class="img-logo" />
                    <figcaption className='icon-skills'><b>S K I L L S</b></figcaption>
                </div>
                <nav className='nav-links'>
                    <ul className='links-toOtherPages'>
                        <li><a href="/aboutUs" className='options-links'><b className='b-aboutUs'>Quem somos?</b></a></li>
                        <li><a href="/cadastro" className='options-links'><b className='b-aboutUs'>Cadastre-se</b></a></li>
                        <li><a href="/login" className='options-links'><b className='b-aboutUs'>Login</b></a></li>
                    </ul>
                </nav>
            </header>
            <div class="div-center">
                <h1 className='skills'><b className='b-aboutUs'>S K I L L S</b></h1>
                <p className='merchan'><b className='b-aboutUs'>Encontre os parceiros <span className='span-aboutUs'>ideais</span> para os seus projetos</b></p>
                <button type="button" className='btt-saibaMais'><b className='b-aboutUs'>Saiba mais</b></button>
            </div>
        </div>
    );
}

export default TelaAboutUs