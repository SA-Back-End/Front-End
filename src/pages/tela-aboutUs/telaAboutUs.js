import React from 'react';
import './telaAboutUs.css';
import Logo from './img/logo.ico';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className='logo'>
            <img src={Logo} alt="logo" />
            <figcaption>S K I L L S</figcaption>
          </li>
          <ul>
            <li className='topics'><a href=''>Quem somos?</a></li>
            <li className='topics'><a href=''>Cadastre-se</a></li>
            <li className='topics'><a href=''>Login</a></li>
          </ul>
        </ul>
      </nav>
      <div className='welcome'>
        <h1>S K I L L S</h1>
        <p>Encontre os parceiros <span>ideais</span> para os seus projetos</p>
        <a href=''>
          <button htype="button">Saiba mais</button>
        </a>
      </div>
    </div>
  );
}

export default App;