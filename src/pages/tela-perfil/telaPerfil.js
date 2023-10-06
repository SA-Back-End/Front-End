// import PerfilTay from "./tay/perfil-tay";
// import Logo from '../tela-aboutUs/img/logo.ico';
import iconPerfil from './img/mamaco.jpg';
import Header from '../components/navbar/navbar'
import "./telaPerfil.css";
import { FaCakeCandles } from 'react-icons/fa6';
import { BiSolidBriefcase, BiLoaderCircle } from 'react-icons/bi'
import { FaMapLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom';

function TelaPerfil() {
    return (
        <div className='TelaPerfil'>

            <Header />

            <div className='div-perfil-retanguloAzul'>

                <div className='container-perfil-retanguloBranco'>

                    <div className='container-perfil-infos'>

                        <div className='div-infosLeft'>
                            <img src={iconPerfil} className='iconPerfil' alt='icon' />
                            <div style={{ display: 'block' }}>
                                <div className='infoHeader'>
                                    <h1>Happy Monke 🍌</h1>
                                    <span>@happyMonke22</span>
                                </div>

                                <div className='accountInfos'>
                                    <div className='div-forInfos'>
                                        <span className='infoFollowing'>236</span>
                                        <span className='spanFollowing'>Seguindo</span>
                                    </div>
                                    <hr className='lineDivisor' />
                                    <div className='div-forInfos'>
                                        <span className='infoFollowers'>433</span>
                                        <span className='spanFollowers'>Seguidores</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='div-infosRight'>
                            <ul>
                                <li>
                                    <div className='groupIcons'><div className='div-orangeIcon'><BiSolidBriefcase className='icon' /></div><span className='spanIcon'>Engenharia/Tecnologia</span></div>
                                </li>
                                <li style={{ marginLeft: 40 }}>
                                    <div className='groupIcons'><div className='div-blueIcon'><FaCakeCandles className='icon' /></div><span className='spanIcon'>25 de agosto</span></div>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <div className='groupIcons'><div className='div-blueIcon'><BiLoaderCircle className='icon' /></div><span className='spanIcon'>Disponibilidade limitada</span></div>
                                </li>
                                <li style={{ marginLeft: 33 }}>
                                    <div className='groupIcons'><div className='div-orangeIcon'><FaMapLocationDot className='icon' /></div><span className='spanIcon'>Santa Catarina</span></div>
                                </li>
                            </ul>
                        </div>

                        <div className='div-button'>
                            <Link to={'/editProfile'}><button className='btt-editProfile'>Editar Perfil</button></Link>
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