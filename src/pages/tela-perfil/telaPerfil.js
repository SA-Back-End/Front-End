/*import geral*/
import iconPerfil from './img/mamaco.jpg';
import Header from '../components/navbar/navbar'
import "./telaPerfil.css";

/*react*/
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

/*react-icons*/
import { FaCakeCandles, FaMapLocationDot } from 'react-icons/fa6';
import { BiSolidBriefcase, BiLoaderCircle } from 'react-icons/bi'
import { AiOutlineExport } from 'react-icons/ai'

/*components from telaPerfil*/
import Experiencias from './nicoly/Experiencias/Experiencias';
import Certificados from './nicoly/Certificados/Certificados';
import Projetos from './isa_e_vih/Projects/projetos';
import axios from 'axios';

function TelaPerfil() {

    window.scrollTo(0, 0)

    // const location = useLocation()
    // const user = location.state.user;
    // console.log(user)

    const navigate = useNavigate()

    const [user, setUser] = useState([])
    const { username } = useParams()

    const handleRequisition = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/user/findOne/${username}`)
            console.log(response)
            setUser(response.data)
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
            navigate('/')
        }
    }

    useEffect(() => {
        handleRequisition()
    }, [])

    useEffect(() => {
        console.log(user)
    }, [user])

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
                                        <a href=''><AiOutlineExport /> Contate-me</a>
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
                                    <li style={{ width: 290 }}>
                                        <div className='groupIcons'><div className='div-orangeIcon'><BiSolidBriefcase className='icon' /></div><span className='spanIcon'>Engenharia/Tecnologia</span></div>
                                    </li>
                                    <li>
                                        <div className='groupIcons'><div className='div-blueIcon'><FaCakeCandles className='icon' /></div><span className='spanIcon'>25 de agosto</span></div>
                                    </li>
                                </ul>
                                <ul>
                                    <li style={{ width: 290 }}>
                                        <div className='groupIcons'><div className='div-blueIcon'><BiLoaderCircle className='icon' /></div><span className='spanIcon'>{user.status}</span></div>
                                    </li>
                                    <li>
                                        <div className='groupIcons'><div className='div-orangeIcon'><FaMapLocationDot className='icon' /></div><span className='spanIcon'>{stateName(user.state)}</span></div>
                                    </li>
                                </ul>
                            </div>

                            <div className='div-button'>
                                <Link to={`/${user.username}/editProfile`}><button className='btt-editProfile'>Editar Perfil</button></Link>
                            </div>

                        </div>

                    </div>

                    <div className='container-perfil-aboutMe-retanguloLaranja'>
                        <div className='container-perfil-aboutMe-infos'>
                            <h2>Sobre mim</h2>
                            <p>
                                Olá pessoal! Me chamo {user.name}, natural de {stateName(user.state)} e esse é meu perfil na SKILLS!
                            </p>
                        </div>
                    </div>

                </div>

                <footer style={{
                    display: 'block',
                    marginTop: '24%',
                    width: '100%'
                }}
                    className='perfil-footer'
                >
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
                marginTop: '3%',
                marginLeft: '6%',
                width: '90%'
            }}
                id='experiencias'
            >
                <Experiencias />
            </div>

            <div style={{
                marginTop: '5%',
                marginLeft: '6%',
                width: '90%'
            }}
                id='certificados'
            >
                <Certificados />
            </div>

            <div style={{
                marginTop: '3%',
                marginLeft: '6%',
                width: '90%'
            }}
                id='projetos'
            >
                <Projetos />
            </div>

        </div>
    );
}
// {/* <PerfilTay></PerfilTay> */ }
export { TelaPerfil }