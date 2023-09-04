import React from 'react';
import './App.css';
import Logo from './logo.ico';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <div className='container'>
              <img src={Logo} alt="logo" />
              <figcaption>S K I L L S</figcaption>
            </div>
          </li>
          <li className='topics'><a href=''>Quem somos?</a></li>
          <li className='topics'><a href=''>Cadastre-se</a></li>
          <li className='topics'><a href=''>Login</a></li>
        </ul>
      </nav>
      <div className='welcome'>
        <h1>S K I L L S</h1>
        <p>Encontre os parceiros <span>ideais</span> para os seus projetos</p>
        <button type="button">Saiba mais</button>
      </div>
    </div>
  );
}

export default App;