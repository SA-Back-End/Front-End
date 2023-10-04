import React from 'react';
import './navbar.css';
import logo from '../../../../tela-aboutUs/img/logo.ico'
import profilePicture from '../../profilePicture.png'
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
                        <li>
                            <img src={profilePicture} alt='profile' id='profilePicture' />
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default HomeNavbar;