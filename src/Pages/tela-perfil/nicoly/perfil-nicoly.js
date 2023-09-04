import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Bio from './components/profile/Bio';
import EditProfile from './components/profile/EditProfile';
import Formacao from './components/profile/Formacao';

function PerfilNicoly() {
    return (
        <div>
            <Bio></Bio>
            <Formacao></Formacao>
        </div>
    );
}

export default PerfilNicoly;