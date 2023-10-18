// import PerfilTay from "./tay/perfil-tay";
// import Logo from '../tela-aboutUs/img/logo.ico';
import iconPerfil from './img/mamaco.jpg';
import Header from '../components/navbar/navbar'
import "./telaPerfil.css";
import { FaCakeCandles } from 'react-icons/fa6';
import { BiSolidBriefcase, BiLoaderCircle } from 'react-icons/bi'
import { FaMapLocationDot } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom';

function TelaPerfil() {

    const location = useLocation()
    const user = location.state.user;
    console.log(user)

    // if (user.name === undefined) {
    //     alert("ERRO: usuário indefinido, redirecionando para login...")
    //     navigate('/login')
    // }

    const stateName = (state) => {
        switch (state) {
            case 'AC':
                return 'Acre';
            case 'AL':
                return 'Alagoas';
            case 'AP':
                return 'Amapá';
            case 'AM':
                return 'Amazonas';
            case 'BA':
                return 'Bahia';
            case 'CE':
                return 'Ceará';
            case 'DF':
                return 'Distrito Federal';
            case 'ES':
                return 'Espírito Santo';
            case 'GO':
                return 'Goiás';
            case 'MA':
                return 'Maranhão';
            case 'MT':
                return 'Mato Grosso';
            case 'MS':
                return 'Mato Grosso do Sul';
            case 'MG':
                return 'Minas Gerais';
            case 'PA':
                return 'Pará';
            case 'PB':
                return 'Paraíba';
            case 'PR':
                return 'Paraná';
            case 'PE':
                return 'Pernambuco';
            case 'PI':
                return 'Piauí';
            case 'RJ':
                return 'Rio de Janeiro';
            case 'RN':
                return 'Rio Grande do Norte';
            case 'RS':
                return 'Rio Grande do Sul';
            case 'RO':
                return 'Rondônia';
            case 'RR':
                return 'Roraima';
            case 'SC':
                return 'Santa Catarina';
            case 'SP':
                return 'São Paulo';
            case 'SE':
                return 'Sergipe';
            case 'TO':
                return 'Tocantins';
            default:
                return 'Estado Desconhecido';
        }
    }

    return (
        <div>
            <div className='TelaPerfil'>

                <Header />

                <div className='div-perfil-retanguloAzul'>

                    <div className='container-perfil-retanguloBranco'>

                        <div className='container-perfil-infos'>

                            <div className='div-infosLeft'>
                                <img src={iconPerfil} className='iconPerfil' alt='icon' />
                                <div style={{ display: 'block', marginLeft: '10%' }}>
                                    <div className='infoHeader'>
                                        {/* <h1>Happy Monke 🍌</h1>
                                        <span>@happyMonke22</span> */}
                                        <h1>{user.name}</h1>
                                        <span>{user.username}</span>
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
                                    <li style={{ marginLeft: 30 }}>
                                        <div className='groupIcons'><div className='div-orangeIcon'><FaMapLocationDot className='icon' /></div><span className='spanIcon'>{stateName(user.state)}</span></div>
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
        </div>
    );
}
// {/* <PerfilTay></PerfilTay> */ }
export { TelaPerfil }