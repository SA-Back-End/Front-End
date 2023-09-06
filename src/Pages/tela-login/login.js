import './login.css';
import login from './img/login.png';
import logo from './img/logo_login.png';

function TelaLogin() {

  return (
    <div className='tela'>
      <div className="div-fixed-position">

        <div className='div-secundaria'>
          <h1>S K I L L S</h1>

          <div className='div-inputs'>
            <input type="text" className='usuario_email' placeholder='Usuário ou E-mail' /> <br></br>
            <input type="password" className='usuario_email' placeholder='Senha' />
          </div>

          <div className='div-links'>
            <p className='senha'> Esqueceu a senha? </p>
            <button className="botao" type="submit">Entrar</button>
            <p className='conta'> Não tem uma conta? <a className='laranja' href='/cadastro'>Cadastre-se</a></p>
          </div>

        </div>

        <div className="div-text">
          <p className="texto"> <img className="logo" src={logo} alt="logo" /> Aprimore suas <b>skills!</b> </p>
          <p className="conectar"> <strong> Para nos mantermos <b>conectados</b>, entre com suas credenciais.</strong></p>
          <img className="boneco" src={login} alt="login" />
        </div>

      </div>
    </div>
  );
}

export default TelaLogin; 