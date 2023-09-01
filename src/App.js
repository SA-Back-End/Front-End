import React from 'react';
import './App.css';
import Logo from './logo.ico';

const App = () => {
  return (
    <div>
      <header>
        <table>
          <tr>
            <td>
              <div className='container'>
                <img src={Logo} alt="logo" />
                <figcaption>S K I L L S</figcaption>
              </div>
            </td>
            <td><a href=''>Quem somos?</a></td>
            <td><a href=''>Cadastre-se</a></td>
            <td><a href=''>Login</a></td>
          </tr>
        </table>
      </header>
      <div className='welcome'>
        <h1>S K I L L S</h1>
        <p><b>Encontre os parceiros <span>ideais</span> para os seus projetos</b></p>
        <button type="button">Saiba mais</button>
      </div>
    </div>
  );
}

export default App;