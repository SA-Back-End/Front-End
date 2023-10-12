import './telaCadastro.css';
import React, { useState } from 'react';
import NavBar from './Components/Inputs/Geral/navBarCadastro';
import desenho from './img/desenho.png';
import { FirstInputs } from './Components/Inputs/FirstInputs/firstInputs.js';
import SecondInputs from './Components/Inputs/SecondInputs/secondInputs.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TelaCadastro() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        firstName: '',
        birthDate: '',
        lastName: '',
        username: '',
        email: '',
        state: '',
        password: '',
    });

    const createUser = () => {
        // userData agora contém os valores dos campos de entrada
        const user = {
            // firstName: userData.firstName,
            // birthDate: userData.birthDate,
            // lastName: userData.lastName,
            // username: userData.username,
            // email: userData.email,
            // password: userData.password,
            // state: userData.state,
            firstName: "João",
            status: "Disponivel",
            birthDate: "2003-09-21T18:19:31.966Z",
            lastName: "Vitor",
            username: "JoaoVitor2",
            description: "Lorem ipsun, lorem lorem",
            email: "joaovitor2@gmail.com",
            password: "senhaQ!1dojoao",
            isAdmin: true,
            state: "SC",
            profilePicture: "U3dhZ2dlciByb2Nrcw=="
        };

        axios.post('http://localhost:3000/user/create', user)
            .then(response => {
                console.log(response);
                console.log(response.data);
                navigate('/login');
            })
            .catch(error => {
                console.log(error.status);
            });
    };

    const [divForInputsContent, setDivForInputsContent] = useState(<FirstInputs userData={userData} setUserData={setUserData} />);
    const [showFirstButton, setShowButton] = useState(true);
    const [showSecondButtons, setBackButton] = useState(false);

    const changeDivForInputsContent = () => {
        setDivForInputsContent(<SecondInputs userData={userData} setUserData={setUserData} />);
        setShowButton(false);
        setBackButton(true);
    };

    const reChangeDivForInputsContent = () => {
        setDivForInputsContent(<FirstInputs userData={userData} setUserData={setUserData} />);
        setShowButton(true);
        setBackButton(false);
    };

    return (
        <div className="TelaCadastro">
            <NavBar />
            <div className="containers">
                <div className="left-container">
                    <div className="quadrado-branco">
                        <div>
                            <h1>S K I L L S</h1>
                            <h2>Bem vindo! Informe os dados abaixo para criar sua conta.</h2>
                        </div>
                        <div className="divForInputs">
                            {divForInputsContent}
                            <div className="button_submit">
                                {showFirstButton && (
                                    <button className="btt-toSecondInputs" onClick={changeDivForInputsContent}>
                                        Próximo➜
                                    </button>
                                )}
                                {showSecondButtons && (
                                    <button className="btt-backFirstInputs" onClick={reChangeDivForInputsContent}>
                                        🠔
                                    </button>
                                )}
                                {showSecondButtons && (
                                    <button className="btt-createAccount" type="submit" onClick={createUser}>
                                        Criar uma conta ➞
                                    </button>
                                )}
                            </div>
                        </div>
                        <p className="p-login">
                            <span className="text">Já tem uma conta?</span>{' '}
                            <a style={{ color: '#FF8200', fontWeight: 'bold' }} href="/login">
                                Faça login
                            </a>
                        </p>
                    </div>
                </div>
                <div className="right-container">
                    <div className="div-bichinho">
                        <img src={desenho} alt="bichinho" className="bichinho"></img>
                    </div>
                    <div className="div-text">
                        <h1>
                            Bem vindo ao <span>S K I L L S</span> !
                        </h1>
                        <p>
                            Inicie sua jornada no <span>S K I L L S</span>, onde você tem passe livre para se desafiar em{' '}
                            <span>qualquer área</span> e crescer através da experiência do desenvolvimento de{' '}
                            <span>projetos em equipes</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TelaCadastro;
