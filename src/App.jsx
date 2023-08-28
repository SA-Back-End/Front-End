import './App.css';
import Data from './Modules/Data/data.js'
import Logo from './img/logo.js';
import React, { useState } from 'react';

function App() {

  const verificarSenhasIguais = () => {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar_senha').value;
    if(senha === confirmarSenha) {
      alert('Senhas iguais')
      return true;
    } else {
      alert('Senhas incorretas')
    }
  }

  return (
    <div className="cadastro">
      <h1>S K I L L S</h1>
      <h2>Cadastrar</h2>

      <div className='centralizar'>

        <div className="nome">
          <input type="text" className="primeiro_nome" placeholder='Primeiro Nome' />
          <input type="text" className="ultimo_nome" placeholder='Último Nome' /><br />
        </div>

        <div className='user_email'>
          <input type="text" className="usuario" placeholder='Usuário' />
          <input type="text" className="email" placeholder='Email' />
        </div>

        <div className="credenciais">
          <input type="password" className="senha" id="senha" placeholder='Senha' /><br />
          <input type="password" className="confirmar_senha" id="confirmar_senha" placeholder='Confirme a Senha' /><br />
        </div>

        <input type="text" className="descricao" placeholder='Descrição' /><br />

        <Data></Data>

        <div className='button_submit'>
          <button className="botao" type="submit" onClick={() => verificarSenhasIguais()} >Cadastrar</button>
        </div>

      </div>
      <div className='Logo'>
        <Logo></Logo>
      </div>

    </div>
  );
}

export default App;