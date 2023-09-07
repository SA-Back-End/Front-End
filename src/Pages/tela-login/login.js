import './login.css';
import login from './img/login.png';
import logo from './img/logo_login.png';

function TelaLogin() {

  return (
    <div className='tela-login'>
      <div className="div-toGroup">

        <div className="div-merchan">
          <p className="p-merchan"> <img className="logo" src={logo} alt="logo" /> Aprimore suas <strong className='strong-login'>skills!</strong> </p>
          <p className="p-merchan"> <strong> Para nos mantermos <strong className='strong-login'>conectados</strong>, entre com suas credenciais.</strong></p>
          <img className="boneco" src={login} alt="login" />
        </div>

        <div className='div-login'>

          <div className='div-login-top'>
            <h1 className='h1-skills-login'>S K I L L S</h1>
          </div>

          <div className='div-inputs'>
            <input type="text" className='login-inputs' placeholder='Usuário ou E-mail' /> <br></br>
            <input type="password" className='login-inputs' placeholder='Senha' />
          </div>

          <div className='div-links'>
            <p className='p-senha'><b>Esqueceu a senha?</b></p>
            <button className="botao-submit" type="submit"><b>Entrar</b></button>
            <p className='p-conta'><b>Não possuí uma conta?</b> <a className='a-login' href='/cadastro'>Cadastre-se</a></p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default TelaLogin; 