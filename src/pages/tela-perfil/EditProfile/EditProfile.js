import React, { useEffect, useState } from 'react';
import './EditProfile.css'
import HomeNavbar from '../../components/navbar/navbar.js';
import profilePicture from './img/account.png'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditProfile = () => {

    /*same code from telaPerfil to get the user infos from the URL*/
    const navigate = useNavigate()

    const [user, setUser] = useState([])
    const { username } = useParams()

    const config = {
        headers: {
            Authorization: sessionStorage.getItem('accessToken')
        }
    }

    const handleRequisition = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/user/findOne/${username}`, config)
            console.log(`response`)
            console.log(response)
            if (response.data.isMe) {
                setUser(response.data)
            } else {
                alert("Você não é o proprietário dessa conta para poder edita-lá")
                navigate(`/${response.data.username}`)
            }
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }

    useEffect(() => {
        handleRequisition()
    }, [])

    /*===============================*/

    //pré-definir alguns inputs com os dados atuais do usuário
    useEffect(() => {
        console.log(user)
        setState(user.state)
        setBirthDate(user.birthDate)
        setStatus(user.status)
        setStudyArea(["Ciencias_Exatas_e_da_Terra"])
        setProfilePictureUrl(user.profilePictureUrl)
    }, [user])

    //pegar os dados dos inputs

    const [firstName, setFirstName] = useState('')
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    const [lastName, setLastName] = useState('')
    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    // const [name, setName] = useState('')

    const [birthDate, setBirthDate] = useState()
    const handleBirthDateChange = (event) => {
        setBirthDate(event.target.value + "T00:00:00.000Z")
    }

    const [state, setState] = useState()
    const handleStateChange = (event) => {
        setState(event.target.value)
    }

    const [description, setDescription] = useState()
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const [studyArea, setStudyArea] = useState(user.studyArea)
    const handleStudyArea = (event) => {
        setStudyArea(event.target.value)
    }

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'abelha.png':
                return "https://i.imgur.com/5OMRDec.png"

            case 'cao.png':
                return "https://i.imgur.com/mDqc9LV.png"

            case 'coala.png':
                return "https://i.imgur.com/lvoD5k2.png"

            case 'ra.png':
                return "https://i.imgur.com/AarHQ2u.png"

            case 'tigre.png':
                return "https://i.imgur.com/8WRYzw7.png"

            case 'tucano.png':
                return "https://i.imgur.com/QfoXFD0.png"

            default:
                break;
        }
    }

    const [profilePictureUrl, setProfilePictureUrl] = useState('')

    const handleProfilePicture = (event) => {
        console.log(event)
        const arquivo = event.target.files[0].name
        const URL = getIcon(arquivo)
        setProfilePictureUrl(URL)
    }
    // const handleProfilePicture = (event) => {
    //     console.log(event)
    //     const newImage = event.target.files[0];
    //     const imageURL = URL.createObjectURL(newImage);
    //     setProfilePictureUrl(imageURL);

    //     if (profilePictureUrl) {
    //         URL.revokeObjectURL(profilePictureUrl);
    //     }
    // }

    const [status, setStatus] = useState()
    const handleStatusChange = (event) => {
        setStatus(event.target.value)
    }

    /*===============================*/

    //pegar as infos dos inputs, criar um objeto com os novos dados, enviar pro back-end, tratar resposta
    const saveChanges = (e) => {

        e.preventDefault();

        const editData = {
            name: `${firstName} ${lastName}`,
            birthDate: `${birthDate}`,
            state: state,
            description: description,
            studyArea: [`${studyArea}`],
            profilePictureUrl: profilePictureUrl,
            status: status
        }

        console.log(editData)

        const accessToken = sessionStorage.getItem('accessToken');
        // console.log(accessToken)

        const config = {
            headers: {
                Authorization: `${accessToken}`
            },
        };

        axios.patch(`http://localhost:3000/user/update/${user.username}`, editData, config)
            .then(res => {
                console.log(res.data);
                alert("EDITOU: " + res.status)
                navigate(`/${user.username}`)
            })
            .catch(error => {
                console.error(error)
                alert(error.response.message)
            });
    }

    return (
        <div className='EditProfile'>

            <HomeNavbar />

            <form onSubmit={saveChanges}>

                <div className='gradient'>
                    <div className='flex'>
                        {user.profilePictureUrl ? (
                            <img src={user.profilePictureUrl} alt='profilePicture' id="profile" style={{ backgroundColor: 'white' }} />
                        ) : (
                            <img src={profilePicture} alt='profilePicture' id="profile" style={{ backgroundColor: 'white' }}/>
                        )
                        }
                        <div className='breakLine'>
                            <div className='breakLine-left'>
                                <h3 className='username'>{user.name}</h3>
                                <span className='editInfo'>Edite abaixo suas informações pessoais</span>
                            </div>
                            <div className='buttons'>
                                <Link to={`/${user.username}`}><button className='profileButton cancel'>Cancelar</button></Link>
                                <button className='profileButton save' type='submit'>Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='edit-Infosinputs'>
                    <ul className='listaInfos'>
                        <li>
                            <div>
                                <label>Primeiro nome:</label>
                                <input type="text" name="firstName" id="firstName" className='inputs' placeholder={user.name} onInput={handleFirstNameChange} required />
                            </div>
                        </li>
                        <li>
                            <div>
                                <label>Último nome:</label>
                                <input type="text" name="lastName" id="lastName" className='inputs' onInput={handleLastNameChange} required />
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
                                <input type="date" name="birthdate" id="birthdate" className='inputDate' onChange={handleBirthDateChange} />
                            </div>
                        </li>
                        <li>
                            <div>
                                <label>Estado: </label>
                                <select className='inputs' style={{
                                    marginLeft: 83
                                }} onChange={handleStateChange} value={state}>
                                    <option disabled>Seleciona seu estado</option>
                                    <option value="AC">Acre (AC)</option>
                                    <option value="AL">Alagoas (AL)</option>
                                    <option value="AP">Amapá (AP)</option>
                                    <option value="AM">Amazonas (AM)</option>
                                    <option value="BA">Bahia (BA)</option>
                                    <option value="CE">Ceará (CE)</option>
                                    <option value="DF">Distrito Federal (DF)</option>
                                    <option value="ES">Espírito Santo (ES)</option>
                                    <option value="GO">Goiás (GO)</option>
                                    <option value="MA">Maranhão (MA)</option>
                                    <option value="MT">Mato Grosso (MT)</option>
                                    <option value="MS">Mato Grosso do Sul (MS)</option>
                                    <option value="MG">Minas Gerais (MG)</option>
                                    <option value="PA">Pará (PA)</option>
                                    <option value="PB">Paraíba (PB)</option>
                                    <option value="PR">Paraná (PR)</option>
                                    <option value="PE">Pernambuco (PE)</option>
                                    <option value="PI">Piauí (PI)</option>
                                    <option value="RJ">Rio de Janeiro (RJ)</option>
                                    <option value="RN">Rio Grande do Norte (RN)</option>
                                    <option value="RS">Rio Grande do Sul (RS)</option>
                                    <option value="RO">Rondônia (RO)</option>
                                    <option value="RR">Roraima (RR)</option>
                                    <option value="SC">Santa Catarina (SC)</option>
                                    <option value="SP">São Paulo (SP)</option>
                                    <option value="SE">Sergipe (SE)</option>
                                    <option value="TO">Tocantins (TO)</option>
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
                                    <textarea rows={4} cols={26} placeholder='Adicione uma curta biografia...' onChange={handleDescriptionChange} />
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
                                <select className='inputs' onChange={handleStudyArea} value={studyArea}>
                                    <option disabled>Seleciona uma opção</option>
                                    <option value={"Ciencias_Exatas_e_da_Terra"}>Ciências Exatas e da Terra</option>
                                    <option value={"Ciencias_Biologicas"}>Ciências Biológicas</option>
                                    <option value={"Engenharia_ou_Tecnologia"}>Engenharia / Tecnologia</option>
                                    <option value={"Ciencias_da_Saude"}>Ciências da Saúde</option>
                                    <option value={"Ciencias_Agrarias"}>Ciências Agrárias</option>
                                    <option value={"Ciencias_Sociais"}>Ciências Sociais</option>
                                    <option value={"Ciencias_Humanas"}>Ciências Humanas</option>
                                    <option value={"Linguistica"}>Lingüística</option>
                                    <option value={"Letras_e_Artes"}>Letras e Artes</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                    <hr />
                    <ul className='listaInfos'>
                        <li>
                            <div>
                                <label>Foto de Perfil:</label>
                                <input type='file' className='inputFile' onChange={handleProfilePicture}></input>
                            </div>
                        </li>
                        <li>
                            <label>Status:</label>
                            <select className='inputs' style={{
                                marginLeft: 90
                            }} onChange={handleStatusChange} value={status}>
                                <option value={'Disponivel'}>Disponível</option>
                                <option value={'Indisponivel'}>Indisponível</option>
                                <option value={'Disponibilidade_Limitada'}>Disponibilidade limitada</option>
                                <option value={'Em_Pausa'}>Em pausa</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </form>
            <footer></footer>
        </div >
    );
}

export default EditProfile;