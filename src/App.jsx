import './App.css';
import Data from './Modules/Data/data.js'
import Logo from './img/logo.js';
import React, { useState } from 'react';
import Barrafixa from './barra-fixa/barra_fixa';
import desenho from './img/desenho.png';
import logo from './img/logo_skills.png'

function App() {

    const verificarSenhasIguais = () => {
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmar_senha').value;
        if (senha === confirmarSenha) {
          alert('Senhas iguais')
          return true;
        } else {
          alert('Senhas incorretas')
        }
      }

    return (
        <div className="cadastro">
            <Barrafixa />
            <div className='quadrado-branco'>
                <h1>S K I L L S</h1>
                <h2>Bem vindo! Informe os dados abaixo para criar sua conta.</h2>
                <Data></Data>
                    <select className='unidades' placeholder='Unidade Federativa'>
                        <option>Selecione um estado</option>
                        <option>Acre</option>
                        <option>Alagoas</option>
                        <option>Amapá</option>
                        <option>Amazonas</option>
                        <option>Bahia</option>
                        <option>Ceará</option>
                        <option>Distrito Federal</option>
                        <option>Espírito Santo</option>
                        <option>Goiás</option>
                        <option>Maranhão</option>
                        <option>Mato Grosso</option>
                        <option>Mato Grosso do Sul</option>
                        <option>Minas Gerais</option>
                        <option>Pará</option>
                        <option>Paraíba</option>                
                        <option>Paraná</option>
                        <option>Pernambuco</option>
                        <option>Piauí</option>
                        <option>Rio de Janeiro</option>                
                        <option>Rio Grande do Norte</option>                
                        <option>Rio Grande do Sul</option>                
                        <option>Rondônia</option>                
                        <option>Roraima</option>                
                        <option>Santa Catarina</option>                
                        <option>São Paulo</option>                
                        <option>Sergipe</option>                
                        <option>Tocantins</option>                        
                    </select>
                <div className="credenciais">
                    <input type="password" className="senha" id="senha" placeholder='Senha' /><br />
                    <input type="password" className="confirmar_senha" id="confirmar_senha" placeholder='Confirmar senha'/><br />
                </div>
                {/* <div className='button_submit'> */}
                    <button className="botao" type="submit" onClick={verificarSenhasIguais}>Criar uma conta ➞</button>
                    <button className="voltar" type="submit" >🠔</button>
                {/* </div> */}
                <p className='com_login'>Já tem uma conta? <span className='laranjaa'>Faça login</span></p>
            </div>
            <div>
                <img src={desenho} alt='bichinho' className='bichinho'></img>
                <h1 className='lateral'>Bem vindo ao <span className='laranja'>S K I L L S</span> !</h1>
                <p className='text'>Inicie sua jornada no <span className='laranja'>S K I L L S</span>, onde você tem passe livre para se desafiar em <span className='laranja'>qualquer área</span> e crescer através da experiência do desenvolvimento de <span className='laranja'>projetos em equipes</span>.</p>
            </div>
        </div >
    );
}

export default App;