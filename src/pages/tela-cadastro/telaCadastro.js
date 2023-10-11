import './telaCadastro.css'
import React, { useState } from 'react';
import NavBar from './Components/Inputs/Geral/navBarCadastro';
import desenho from './img/desenho.png';
import { FirstInputs } from './Components/Inputs/FirstInputs/firstInputs.js';
import SecondInputs from './Components/Inputs/SecondInputs/secondInputs.js';

function TelaCadastro() {

    const [divForInputsContent, setDivForInputsContent] = useState(<FirstInputs />)
    const [showButton, setShowButton] = useState(true);
    const [showBackButton, setBackButton] = useState(false)

    const changeDivForInputsContent = () => {
        setDivForInputsContent(<SecondInputs />);
        setShowButton(false); // Ocultar o botão
    };

    const reChangeDivForInputsContent = () => {
        setDivForInputsContent(<FirstInputs />);
        // setShowButton(false)
        setBackButton(true);
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
                                {showButton && ( // Renderizar o botão apenas se showButton for true
                                    <button className="botao" onClick={changeDivForInputsContent}>Próximo➜</button>
                                )}
                                {showBackButton && (
                                    <button className="voltar" onClick={reChangeDivForInputsContent}>🠔</button>
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