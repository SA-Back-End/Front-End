import './App.css';
import Data from './data.jsx'
import Logo from './logo';

function App() {
  return (
    <div className="cadastro">
      <h1>S K I L L S</h1>
      <h2>Cadastrar</h2>
      <div className='centralizar'>

        <div className="nome">
          <input type="text" className="primeiro_nome" placeholder='Primeiro Nome' />
          <input type="text" className="ultimo_nome" placeholder='Ùltimo Nome' /><br />
        </div>

        <input type="text" className="usuario" placeholder='Usuário' />

        <div className="credenciais">
          <input type="text" className="email" placeholder='Email' /><br />
          <input type="password" className="senha" placeholder='Senha' /><br />
        </div>

        <input type="text" className="descricao" placeholder='Descrição' /><br />

        <Data></Data>

      </div>

      <div className='button_submit'>
        <button className="botao" type=" submit">Cadastrar</button>
      </div>

      <div className='Logo'>
        <Logo></Logo>
      </div>

    </div >

  );
}

export default App;
