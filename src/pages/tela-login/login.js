import './login.css';
import login from './img/login.png';
import logo from './img/logo_login.png';
import { Link } from 'react-router-dom';

function TelaLogin() {

  return (
    <div className='TelaLogin'>
      <div className="div-toGroup">

        <div className="div-merchan">
          <p className="p-merchan"> <img className="logoLogin" src={logo} alt="logo" /> Aprimore suas <strong className='strong-login'>skills!</strong> </p>
          <p className="p-merchan"> <strong> Para nos mantermos <strong className='strong-login'>conectados</strong>, entre com suas credenciais.</strong></p>
          <img className="boneco" src={login} alt="login" />
        </div>

        <div className='div-login'>

          <div className='div-login-top'>
            <h1>S K I L L S</h1>
          </div>

          <div className='div-inputs'>
            <input type="text" className='login-inputs' placeholder='Usuário ou E-mail' /> <br></br>
            <input type="password" className='login-inputs' placeholder='Senha' />
          </div>

          <div className='div-links'>
            <p className='p-senha'>Esqueceu a senha?</p>
            <Link to={'/perfil'}><button className="botao-submit" type="submit"><b>Entrar</b></button></Link>
            <p className='p-conta'><span>Não tem uma conta?</span> <a className='a-login' href='/cadastro'>Cadastre-se</a></p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default TelaLogin; 