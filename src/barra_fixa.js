import React from "react"
import Logo from './img/logo_skills.png'
import './App.css';

function Barrafixa() {
    return (
        <div className="barra">
          <img className="logo" src={Logo}/>
          <h1 className="skills">S K I L L S</h1>
          <p className="quem-somos">Quem somos?</p>
          <p className="cadastre-se">Cadastre-se</p>
          <p className="login">Login</p>
        </div>
        
    )
}

export default Barrafixa;