// import Data from './Modules/Data/data.js'
import './telaCadastro.css'
// import Logo from './Components/logo';
import React, { useState } from 'react';
import Barrafixa from './Components/Inputs/Geral/barra_fixa';
import desenho from './img/desenho.png';
// import logo from './img/logo_skills.png'


function TelaCadastro() {

    // const verificarSenhasIguais = () => {
    //     const senha = document.getElementById('senha').value;
    //     const confirmarSenha = document.getElementById('confirmar_senha').value;
    //     if (senha === confirmarSenha) {
    //         alert('Senhas iguais')
    //         return true;
    //     } else {
    //         alert('Senhas incorretas')
    //     }
    // }

    return (
        <div className="TelaCadastro">
            {/* <header>
                <Barrafixa />
            </header> */}
            <div className='containers'>
                <div className='left-container'>
                    <div className='quadrado-branco'>
                        <div>
                            <h1>S K I L L S</h1>
                            <h2>Bem vindo! Informe os dados abaixo para criar sua conta.</h2>
                        </div>
                        <div className="nome">
                            <input type="text" className="primeiro_nome" placeholder='Primeiro Nome' />
                            <input type="text" className="ultimo_nome" placeholder='Último Nome' />
                        </div>
                        <div className='user_email'>
                            <input type="text" className="usuario" placeholder=' Nome de usuário' />
                            <input type="text" className="email" placeholder='E-mail' />
                        </div>
                        <div className='button_submit'>
                            <button className="botao" type="submit" >Próximo➜</button>
                        </div>
                        <p className='p-login'><span className='text'>Já tem uma conta?</span> <a style={{ color: '#FF8200', fontWeight: 'bold' }} href='/login'>Faça login</a></p>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='div-bichinho'>
                        <img src={desenho} alt='bichinho' className='bichinho'></img>
                    </div>
                    <div className='div-text'>
                        <h1>Bem vindo ao <span>S K I L L S</span> !</h1>
                        <p>
                            Inicie sua jornada no <span>S K I L L S</span>, onde você tem passe livre para se desafiar em <span>qualquer área</span> e crescer através da experiência do desenvolvimento de <span>projetos em equipes</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TelaCadastro;