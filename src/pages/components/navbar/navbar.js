import React from 'react';
import './navbar.css';
import logo from './images/logo.ico'
import profilePicture from '../../tela-perfil/nieto-EditProfile/profilePicture.png'
import { BsFillGearFill, BsBellFill, BsSearch } from 'react-icons/bs'

const HomeNavbar = () => {
    return (
        <div className='HomeNavbar'>
            <header>
                <nav>
                    <ul>
                        <li className='logoFlex'>
                            <img src={logo} alt='logo' id='logo' />
                            <p>Skills</p>
                        </li>
                        <ul className='icon-buttons'>
                            <li>
                                <BsSearch className='icons' />
                            </li>
                            <li>
                                <BsBellFill className='icons' />
                            </li>
                            <li>
                                <BsFillGearFill className='icons' />
                            </li>
                            <li>
                                <img src={profilePicture} alt='profile' id='profilePicture' />
                            </li>
                        </ul>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default HomeNavbar;