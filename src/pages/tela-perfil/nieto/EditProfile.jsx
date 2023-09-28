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
                        <div className='breakLine-left'>
                            <h3 className='username'>Julia Alvarenga</h3>
                            <span className='editInfo'>Edite abaixo suas informações pessoais</span>
                        </div>
                        <div className='buttons'>
                            <button className='profileButton cancel'>Cancelar</button>
                            <button className='profileButton save'>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='edit-Infosinputs'>
                <ul className='listaInfos'>
                    <li>
                        <div>
                            <label>Primeiro nome:</label>
                            <input type="text" name="firstName" id="firstName" className='inputs' />
                        </div>
                    </li>
                    <li>
                        <div>
                            <label>Último nome:</label>
                            <input type="text" name="lastName" id="lastName" className='inputs' />
                        </div>
                    </li>
                </ul>
                <hr></hr>
                <ul className='listaInfos'>
                    <li>
                        <div style={{
                            display: 'flex'
                        }}>
                            <div style={{ width: 95 }}><label>Data de nascimento:</label></div>
                            <input type="date" name="birthdate" id="birthdate" className='inputDate' />
                        </div>
                    </li>
                    <li>
                        <div>
                            <label>Estado: </label>
                            <input type="text" name="state" id="state" className='inputs estado' />
                        </div>
                    </li>
                </ul>
                <hr></hr>
                <ul className='listaInfos'>
                    <li>
                        <div style={{
                            display: 'flex'
                        }}>
                            <label>Biografia:</label>
                            <div style={{
                                marginLeft: 80
                            }}>
                                <textarea rows={4} cols={26} placeholder='Adicione uma curta biografia...' />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style={{
                            display:'flex'
                        }}>
                            <div style={{width: 110}}>
                                <label>Área do conhecimento:</label>
                            </div>
                            <input type="text" className='inputs' />
                        </div>
                    </li>
                </ul>
            </div>

        </div >
    );
}

export default EditProfile;