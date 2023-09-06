import React from 'react';
import './telaAboutUs.css';
import Logo from './img/logo.ico';

const TelaAboutUs = () => {
    return (
        <div className='tela-principal'>
            <header>
                <table>
                    <tr>
                        <td>
                            <div className='container'>
                                <img src={Logo} alt="logo" />
                                <figcaption><b>S K I L L S</b></figcaption>
                            </div>
                        </td>
                        <td><a href='/aboutUs'>Quem somos?</a></td>
                        <td><a href='/cadastro'>Cadastre-se</a></td>
                        <td><a href='/login'>Login</a></td>
                    </tr>
                </table>
            </header>
            <div className='welcome'>
                <h1><b>S K I L L S</b></h1>
                <p><b>Encontre os parceiros <span>ideais</span> para os seus projetos</b></p>
                <button type="button">Saiba mais</button>
            </div>
        </div>
    );
}

export default TelaAboutUs