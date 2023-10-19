import React from 'react';
import './EditProfile.css'
import HomeNavbar from '../../components/navbar/navbar.js';
import profilePicture from './profilePicture.png'
import { Link } from 'react-router-dom';

const EditProfile = () => {
    return (
        <div className='EditProfile'>

            <HomeNavbar />

            <div className='gradient'>
                <div className='flex'>
                    <img src={profilePicture} alt='profilePicture' id="profile" />
                    <div className='breakLine'>
                        <div className='breakLine-left'>
                            <h3 className='username'>Julia Alvarenga</h3>
                            <span className='editInfo'>Edite abaixo suas informações pessoais</span>
                        </div>
                        <div className='buttons'>
                            <Link to={'/perfil'}><button className='profileButton cancel'>Cancelar</button></Link>
                            <Link to={'/perfil'}><button className='profileButton save' type='submit'>Salvar</button></Link>
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
                            <select className='inputs' style={{
                                marginLeft: 83
                            }}>
                                <option disabled>Seleciona seu estado</option>
                                <option value={"AC"}>Acre (AC)</option>
                                <option value={"AL"}>Alagoas (AL)</option>
                                <option value={"AP"}>Amapá (AP)</option>
                                <option value={"AM"}>Amazonas (AM)</option>
                                <option value={"BA"}>Bahia (BA)</option>
                                <option value={"CE"}>Ceará (CE)</option>
                                <option value={"DF"}>Distrito Federal (DF)</option>
                                <option value={"ES"}>Espírito Santo (ES)</option>
                                <option value={"GO"}>Goiás (GO)</option>
                                <option value={"MA"}>Maranhão (MA)</option>
                                <option value={"MT"}>Mato Grosso (MT)</option>
                                <option value={"MS"}>Mato Grosso do Sul (MS)</option>
                                <option value={"MG"}>Minas Gerais (MG)</option>
                                <option value={"PA"}>Pará (PA)</option>
                                <option value={"PB"}>Paraíba (PB)</option>
                                <option value={"PR"}>Paraná (PR)</option>
                                <option value={"PE"}>Pernambuco (PE)</option>
                                <option value={"PI"}>Piauí (PI)</option>
                                <option value={"RJ"}>Rio de Janeiro (RJ)</option>
                                <option value={"RN"}>Rio Grande do Norte (RN)</option>
                                <option value={"RS"}>Rio Grande do Sul (RS)</option>
                                <option value={"RO"}>Rondônia (RO)</option>
                                <option value={"RR"}>Roraima (RR)</option>
                                <option value={"SC"}>Santa Catarina (SC)</option>
                                <option value={"SP"}>São Paulo (SP)</option>
                                <option value={"SE"}>Sergipe (SE)</option>
                                <option value={"TO"}>Tocantins (TO)</option>
                            </select>
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
                            display: 'flex'
                        }}>
                            <div style={{ width: 110 }}>
                                <label>Área do conhecimento:</label>
                            </div>
                            <select className='inputs'>
                                <option disabled>Seleciona uma opção</option>
                                <option value={"exatas"}>Ciências Exatas e da Terra</option>
                                <option value={"biologicas"}>Ciências Biológicas</option>
                                <option value={"engenharia"}>Engenharia / Tecnologia</option>
                                <option value={"saude"}>Ciências da Saúde</option>
                                <option value={"agrarias"}>Ciências Agrárias</option>
                                <option value={"sociais"}>Ciências Sociais</option>
                                <option value={"humanas"}>Ciências Humanas</option>
                                <option value={"linguistica"}>Lingüística</option>
                                <option value={"letras-artes"}>Letras e Artes</option>
                            </select>
                        </div>
                    </li>
                </ul>
                <hr />
                <ul className='listaInfos'>
                    <li>
                        <div>
                            <label>Foto de Perfil:</label>
                            <input type='file' className='inputFile'></input>
                        </div>
                    </li>
                    <li>
                        <label>Status:</label>
                        <select className='inputs' style={{
                            marginLeft: 90
                        }}>
                            <option value={'disponivel'}>Disponível</option>
                            <option value={'indisponivel'}>Indisponível</option>
                            <option value={'disponibilidade limitada'}>Disponibilidade limitada</option>
                            <option value={'emPausa'}>Em pausa</option>
                        </select>
                    </li>
                </ul>
            </div>
            <footer></footer>
        </div >
    );
}

export default EditProfile;