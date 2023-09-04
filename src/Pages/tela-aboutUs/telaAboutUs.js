import './telaAboutUs.css';
import Logo from './img/logo.ico'

const TelaAboutUs = () => {
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
      <p>Encontre os parceiros ideais para os seus projetos</p>
      <button onclick='' type="button">Saiba mais</button>
    </div>
  );
}

export default TelaAboutUs;