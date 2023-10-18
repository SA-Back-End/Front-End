import React from "react"
import logo from '../../../../components/navbar/images/logo.ico'
import '../Geral/navBarCadastro.css'

function NavBarCadastro() {
  return (
    <div className='NavBarCadastro'>
      <header>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
            <li className='logoFlex'>
              <img src={logo} alt='logo' id='logo' />
              <p>Skills</p>
            </li>
            <ul className='links'>
              <li><a style={{ color: '#003DA5' }} href="/">Quem somos?</a></li>
              <li><a style={{ color: '#FF8200' }} href="/cadastro">Cadastre-se</a></li>
              <li><a style={{ color: '#003DA5' }} href="/login">Login</a></li>
            </ul>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBarCadastro;