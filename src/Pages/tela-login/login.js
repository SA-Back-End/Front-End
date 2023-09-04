import './login.css';
import login from './login.png';
import logo from './logo_login.png';

function TelaLogin() {

  return (
    <div className="principal">
      <div className="fixed-position">

        <div className='secundaria'>
          <h1>S K I L L S</h1>
          <div className='input'>
            <input type="text" className='usuario_email' placeholder='Usuário ou E-mail' /> <br></br>
            <input type="password" className='usuario_email' placeholder='Senha' />
          </div>
          <p className='senha'> Esqueceu a senha? </p>
          <button className="botao" type="submit">Entrar</button>
          <p className='conta'> Não tem uma conta? <a className='laranja' href='/cadastro'>Cadastre-se</a></p>
        </div>
        <div className="aprimore">
            <p1 className="texto" > <img className="logo" src={logo} alt="logo" /> Aprimore suas <a>skills!</a> </p1>
            <p2 className="conectar"> <strong> Para nos mantermos <a>conectados</a>, entre com suas credenciais.</strong></p2>
            <img className="boneco" src={login} alt="login" />
        </div>
      </div>
    </div>
  );
}

export default TelaLogin;