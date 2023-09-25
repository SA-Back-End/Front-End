import React from 'react';
import './EditProfile.css';
import HomeNavbar from './components/navbar/navbar';
import profilePicture from './profilePicture.png'
const EditProfile = () => {
    return (
        <div className='EditProfile'>
            <header>
                <HomeNavbar />
            </header>

            <div className='gradient'>
                <div className='flex'>
                    <img src={profilePicture} alt='profilePicture' id="profile" />
                    <div className='breakLine'>
                        <h3 className='username'>Julia Alvarenga</h3>
                        <span className='editInfo'>Edite abaixo suas informações pessoais</span>

                        <div className='buttons'>
                            <button className='profileButton cancel'>Cancelar</button>
                            <button className='profileButton save'>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label>Primeiro nome:</label>
                <input type="text" name="firstName" id="firstName" />

                <label>Último nome:</label>
                <input type="text" name="firstName" id="firstName" />

                <label>Data de nascimento:</label>
                <input type="date" name="firstName" id="firstName" />
            </div>
        </div >
    );
}

export default EditProfile;