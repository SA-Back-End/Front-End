import './login.css';
import boneco from './img/login.png';
import logo from './img/logo_login.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function TelaLogin() {

  const navigate = useNavigate()

  const [login, setUserLogin] = useState()
  const handleLogin = (htmlInputLogin) => {
    setUserLogin(htmlInputLogin.target.event)
  }

  const [password, setUserPassword] = useState()
  const handlePassword = (htmlInputPassword) => {
    setUserPassword(htmlInputPassword.target.event)
  }

  const userLogin = (e) => {

    e.preventDefault();

    console.log(login, password)

    const loginInfos = {
      login: login,
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
          <img className="boneco" src={boneco} alt="login" />
        </div>

        <div className='div-login'>

          <div className='div-login-top'>
            <h1>S K I L L S</h1>
          </div>

          <div className='div-inputs'>
            <input type="text" className='login-inputs' placeholder='Usuário ou E-mail' id='user-login' onInput={handleLogin} /> <br></br>
            <input type="password" className='login-inputs' placeholder='Senha' id='user-password' onInput={handlePassword} />
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