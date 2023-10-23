import React from 'react';
import './navbar.css';
import logo from './images/logo.ico'
import profilePicture from '../../tela-perfil/nieto-EditProfile/profilePicture.png'
import { BsFillGearFill, BsBellFill, BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const HomeNavbar = () => {
    return (
        <div className='HomeNavbar'>
            <header>
                <nav>
                    <ul>
                        <li className='logoFlex'>
                            {/* <Link to={"/"}><img src={logo} alt='logo' id='logo' /></Link> */}
                            <Link to={"/match"}><img src={logo} alt='logo' id='logo' /></Link>
                            <p>Skills</p>
                        </li>
                        <ul className='icon-buttons'>
                            <li>
                                <Link to={"/forYou"}><BsSearch className='icons' /></Link>
                            </li>
                            <li>
                                <BsBellFill className='icons' />
                            </li>
                            <li>
                                <Link to={"/editProfile"}><BsFillGearFill className='icons' /></Link>
                            </li>
                            <li>
                                <Link to={""}><img src={profilePicture} alt='profile' id='profilePicture' /></Link>
                            </li>
                        </ul>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default HomeNavbar;