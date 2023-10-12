import './telaCadastro.css'
import React, { useState } from 'react';
import NavBar from './Components/Inputs/Geral/navBarCadastro';
import desenho from './img/desenho.png';
import { FirstInputs } from './Components/Inputs/FirstInputs/firstInputs.js';
import SecondInputs from './Components/Inputs/SecondInputs/secondInputs.js';

function TelaCadastro() {

    const [divForInputsContent, setDivForInputsContent] = useState(<FirstInputs />)
    const [showFirstButton, setShowButton] = useState(true);
    const [showSecondButtons, setBackButton] = useState(false)

    const changeDivForInputsContent = () => {
        setDivForInputsContent(<SecondInputs />);
        setShowButton(false); // Ocultar o botão
        setBackButton(true)
    };

    const reChangeDivForInputsContent = () => {
        setDivForInputsContent(<FirstInputs />);
        setShowButton(true)
        setBackButton(false);
    }

    return (
        <div className="TelaCadastro">
            <NavBar />
            <div className='containers'>
                <div className='left-container'>
                    <div className='quadrado-branco'>
                        <div>
                            <h1>S K I L L S</h1>
                            <h2>Bem vindo! Informe os dados abaixo para criar sua conta.</h2>
                        </div>
                        <div className='divForInputs'>
                            {divForInputsContent}
                            <div className='button_submit'>
                                {showFirstButton && ( // Renderizar o botão apenas se showButton for true
                                    <button className="btt-toSecondInputs" onClick={changeDivForInputsContent}>Próximo➜</button>
                                )}
                                {showSecondButtons && (
                                    <button className="btt-backFirstInputs" onClick={reChangeDivForInputsContent}>🠔</button>
                                )}
                                {showSecondButtons && (
                                    <a href='/perfil'><button className="btt-createAccount" type="submit">Criar uma conta ➞</button></a>
                                )}
                            </div>
                        </div>
                        <p className='p-login'><span className='text'>Já tem uma conta?</span> <a style={{ color: '#FF8200', fontWeight: 'bold' }} href='/login'>Faça login</a></p>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='div-bichinho'>
                        <img src={desenho} alt='bichinho' className='bichinho'></img>
                    </div>
                    <div className='div-text'>
                        <h1>Bem vindo ao <span>S K I L L S</span> !</h1>
                        <p>
                            Inicie sua jornada no <span>S K I L L S</span>, onde você tem passe livre para se desafiar em <span>qualquer área</span> e crescer através da experiência do desenvolvimento de <span>projetos em equipes</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TelaCadastro;