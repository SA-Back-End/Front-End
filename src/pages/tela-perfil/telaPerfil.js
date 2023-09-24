// import PerfilTay from "./tay/perfil-tay";
// import Logo from '../tela-aboutUs/img/logo.ico';
import iconPerfil from './img/mamaco.jpg';
import Header from './nieto/components/navbar/navbar.js'
import "./telaPerfil.css";

function TelaPerfil() {
    return (
        <div className='TelaPerfil'>

            <Header />

            <div className='div-perfil-retanguloAzul'>
                <div className='container-perfil-retanguloBranco'>
                    <div className='container-perfil-infos'>
                        <img src={iconPerfil} className='iconPerfil' alt='icon' />
                        <div className='div-infosLeft'>
                            <p>
                                <h2>Happy Monke 🍌</h2>
                                @happyMonke22
                            </p>
                            <div className='accountInfos'>
                                <div className='div-forInfos'>
                                    <span className='infoFollowing'>236</span>
                                    <span>Seguindo</span>
                                </div>
                                <hr className='lineDivisor' />
                                <div className='div-forInfos'>
                                    <span className='infoFollowers'>433</span>
                                    <span>Seguidores</span>
                                </div>
                            </div>
                        </div>
                        <div className='div-infosRight'>
                            <ul>
                                <li>Engenharia/Tecnologia</li>
                                <li>Disponibilidade limitada</li>
                                <li>25 de agosto</li>
                                <li>Santa Catarina</li>
                            </ul>
                        </div>
                        <div className='div-button'>
                            <button>Editar Perfil</button>
                        </div>
                    </div>
                </div>
                <div className='container-perfil-aboutMe-retanguloLaranja'>
                    <div className='container-perfil-aboutMe-infos'>
                        <h2>Sobre mim</h2>
                        <p>
                            Olá pessoal! Me chamo Jorginho, tenho 22 anos e sou formado
                            em Marketing. Atualmente moro em Palhoça/SC e curso sistemas
                            de informação na UNISUL. Sou muito criativo, divertido e proativo
                            e busco projetos que me permitam aprender mais!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
// {/* <PerfilTay></PerfilTay> */ }
export { TelaPerfil }