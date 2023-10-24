import React, { useState } from 'react';
import './navbar.css';
import logo from './images/logo.ico'
// import profilePicture from '../../tela-perfil/EditProfile/profilePicture.png'
import profilePicture from './images/account.png'
import { BsFillGearFill, BsBellFill, BsSearch } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Notificacao from '../modules/tela-notificacao/telaNotificacao';

const HomeNavbar = (props) => {

    const [user, setUser] = useState()
    const getUser = () => {
        setUser(props.getUser())
    }

    const { username } = useParams()
    const navigate = useNavigate()

    const config = {
        headers: {
            Authorization: sessionStorage.getItem('accessToken')
        }
    }

    const goToUserLoggedAccount = async () => {
        try {

            const response = await axios.get('http://localhost:3000/auth/profile', config)
            console.log(response)
            if (response.status === 200) {
                console.log("navegando...")
                navigate(`/${response.data.username}`)
                window.location.reload()
            }

        } catch (e) {
            console.log(e)
            alert("ERROR!\nVoltando para tela inicial...")
            navigate('/')
        }
    }

    const [showNotification, setShowNotification] = useState(false);

    const handleShowNotification = () => {
        setShowNotification(!showNotification);
    };

    return (
        <div className='HomeNavbar'>
            <header>
                <nav>
                    <ul>
                        <li className='logoFlex'>
                            <Link to={"/match"}><img src={logo} alt='logo' id='logo' /></Link>
                            <p>Skills</p>
                        </li>
                        <ul className='icon-buttons'>
                            <li>
                                <Link to={"/forYou"}><BsSearch className='icons' /></Link>
                            </li>
                            <li>
                                <BsBellFill className='icons' onClick={handleShowNotification} />
                            </li>
                            <li>
                                <Link to={`/${username}/editProfile/accountInfos`}><BsFillGearFill className='icons' /></Link>
                            </li>
                            <li>
                                <img
                                    src={profilePicture}
                                    style={{ width: 30, height: 30, color: '#003da5' }}
                                    alt='profile'
                                    id='profilePicture'
                                    onClick={goToUserLoggedAccount}
                                />
                            </li>
                        </ul>
                    </ul>
                </nav>
            </header>
            <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 3 }}>
                {showNotification && <Notificacao />}
            </div>
        </div>
    );
}

export default HomeNavbar;