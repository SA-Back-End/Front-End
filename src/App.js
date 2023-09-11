import React from 'react';
import './App.css';
import Logo from './logo.ico';

const App = () => {
  return (
    <div className='tela'>
      <nav className='topo'>
        <ul className='lista'>
          <li>
            <img src={Logo} className='logo' alt="logo" />
            <figcaption className='legenda'>S K I L L S</figcaption>
          </li>
          <ul className='lista'>
            <li className='topics'><a className='redirect' href=''>Quem somos?</a></li>
            <li className='topics'><a className='redirect' href=''>Cadastre-se</a></li>
            <li className='topics'><a className='redirect' href=''>Login</a></li>
          </ul>
        </ul>
      </nav>
      <div className='welcome'>
        <h1 className='nome'>S K I L L S</h1>
        <p className='slogan'>Encontre os parceiros <span className='laranja'>ideais</span> para os seus projetos</p>
        <a href=''>
          <button className='btn' htype="button">Saiba mais</button>
        </a>
      </div>
    </div>
  );
}

export default App;