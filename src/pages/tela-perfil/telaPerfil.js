// import PerfilTay from "./tay/perfil-tay";
// import Logo from '../tela-aboutUs/img/logo.ico';
import iconPerfil from './img/mamaco.jpg';
import Header from '../components/navbar/navbar'
import "./telaPerfil.css";
import { FaCakeCandles } from 'react-icons/fa6';
import { BiSolidBriefcase, BiLoaderCircle } from 'react-icons/bi'
import { FaMapLocationDot } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom';
import Experiencias from './nicoly/Experiencias/Experiencias';
import Certificados from './nicoly/Certificados/Certificados';

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
                                <div>
                                    <img src={iconPerfil} className='iconPerfil' alt='icon' />
                                    <div className='infoHeader'>
                                        <a href=''>Contate-me</a>
                                    </div>
                                </div>
                                <div style={{ display: 'block', marginLeft: '10%' }}>
                                    <div className='infoHeader'>
                                        <h1>{user.name}</h1> {/* name => firstName + lastName (junção feita no backend) */}
                                        <span>@{user.username}</span>
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
                                Olá pessoal! Me chamo {user.name} e sou formado
                                em Marketing. Atualmente moro em Palhoça/SC e curso Sistemas
                                de Informação na UNISUL. Sou muito criativo, divertido e proativo
                                e busco projetos que me permitam aprender mais!
                            </p>
                        </div>
                    </div>

                </div>

                <footer style={{
                    display: 'block',
                    position: 'absolute',
                    top: '92%',
                    width: '100%'
                }}>
                    <ul style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        listStyle: 'none'
                    }}>
                        <li><a href='#skills' style={{ textDecoration: 'none', color: 'black' }}>Skills</a></li>
                        <li><a href='#formacoes' style={{ textDecoration: 'none', color: 'black' }}>Formações</a></li>
                        <li><a href='#experiencias' style={{ textDecoration: 'none', color: 'black' }}>Experiências</a></li>
                        <li><a href='#certificados' style={{ textDecoration: 'none', color: 'black' }}>Certificados</a></li>
                        <li><a href='#projetos' style={{ textDecoration: 'none', color: 'black' }}>Projetos</a></li>
                    </ul>
                    <hr style={{ boxShadow: '0px 4px 4px 0px #00000040' }} />
                </footer>

            </div> {/*fim da primeira parte da telaPerfil*/}

            <div style={{
                marginTop: '40%',
                marginLeft: '8%'
            }}
                id='#experiencia'
            >
                <Experiencias />
            </div>

            <div style={{
                marginTop: '10%',
                marginLeft: '8%'
            }}
                id='#certificados'
            >
                <Certificados />
            </div>

        </div>
    );
}
// {/* <PerfilTay></PerfilTay> */ }
export { TelaPerfil }