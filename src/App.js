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
              <div className='one'>
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

      <h1>S K I L L S</h1>
      <p>Encontre os parceiros<b>ideais</b>para os seus projetos</p>

    </div>
  );
}

export default App;