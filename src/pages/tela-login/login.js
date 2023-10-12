import './login.css';
import login from './img/login.png';
import logo from './img/logo_login.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function TelaLogin() {

  const navigate = useNavigate()

  const userLogin = (e) => {

    e.preventDefault();

    const userLogin = document.getElementById('user-login').value
    const password = document.getElementById('user-password').value

    console.log(userLogin, password)

    const loginInfos = {
      login: userLogin,
      password: password
    }

    axios.post('http://localhost:3000/auth/login', loginInfos)
      .then(response => {
        console.log(response.data)
        sessionStorage.setItem('accessToken', response.data);
        alert("Login sucesso: " + response.status);
        navigate('/perfil')
      })
      .catch(error => {
        console.log(error.response)
        alert("Login erro: " + error.status);
      })
  }

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
            <input type="text" className='login-inputs' placeholder='Usuário ou E-mail' id='user-login' /> <br></br>
            <input type="password" className='login-inputs' placeholder='Senha' id='user-password' />
          </div>

          <div className='div-links'>
            <p className='p-senha'>Esqueceu a senha?</p>
            <button className="botao-submit" type="submit" onClick={userLogin}><b>Entrar</b></button>
            <p className='p-conta'><span>Não tem uma conta?</span> <a className='a-login' href='/cadastro'>Cadastre-se</a></p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default TelaLogin; 