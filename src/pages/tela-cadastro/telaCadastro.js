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
                        <h1>S K I L L S</h1>
                        <h2>Bem vindo! Informe os dados abaixo para criar sua conta.</h2>
                        <div className="nome">
                            <input type="text" className="primeiro_nome" placeholder='Primeiro Nome' />
                            <input type="text" className="ultimo_nome" placeholder='Último Nome' /><br />
                        </div>
                        <div className='user_email'>
                            <input type="text" className="usuario" placeholder='Usuário' /> <br></br>
                            <input type="text" className="email" placeholder='E-mail' />
                        </div>
                        {/* <div className="credenciais">
            <input type="password" className="senha" id="senha" placeholder='Senha' /><br />
            <input type="password" className="confirmar_senha" id="confirmar_senha" placeholder='Confirme a Senha' /><br />
          </div>
          <input type="text" className="descricao" placeholder='Descrição' /><br /> */}
                        {/* <Data></Data> */}
                        <div className='button_submit'>
                            <button className="botao" type="submit" >Próximo➜</button>
                        </div>
                        <p className='com_login'>Já tem uma conta? <span className='laranjaa'>Faça login</span></p>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='div-bichinho'>
                        <img src={desenho} alt='bichinho' className='bichinho'></img>
                    </div>
                    <div>
                        <h1 className='lateral'>Bem vindo ao <span className='laranja'>S K I L L S</span> !</h1>
                        <p className='text'>Inicie sua jornada no <span className='laranja'>S K I L L S</span>, onde você tem passe livre para se desafiar em
                            <span className='laranja'>qualquer área</span> e crescer através da experiência do desenvolvimento de
                            <span className='laranja'>projetos em equipes</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TelaCadastro;