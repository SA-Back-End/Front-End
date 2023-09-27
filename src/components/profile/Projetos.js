import React, { useState } from 'react';
import "./Projetos.css";
import Botao from '../necessaria/botao';
import Modal from '../necessaria/modal';
import icone from '../img/icone.png'


function Projetos({ user }) {
    // const [showRegister, setshowRegister] = useState(false);s
    const liderando = [{
        projectTitle: "Lavagem de dinheiro",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    }, {
        projectTitle: "Lavagem de dinheiro",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    }, {
        projectTitle: "Lavagem de dinheiro",
        status: "Concluido",
        duration: "6 meses",
        description: "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    }];
    const participando = [{
        projectTitle: "Lavagem de money",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    }, {
        projectTitle: "Lavagem de money",
        status: "Indisponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    }];
    const concluido = [{
        projectTitle: "Lavagem de dindin",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    }, {
        projectTitle: "Lavagem de dindin",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    }, {
        projectTitle: "Lavagem de dindin",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    }];
    console.log(user)

    const respostaAPI = [
        { name: "liderando", itens: liderando },
        { name: 'participando', itens: participando },
        { name: 'concluído', itens: concluido }
    ];

    // const handleNotRegister = () => {
    //     setshowRegister(true);
    // }

    // if (showRegister) {
    //     return <InputProjetos />;
    // }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  


    return (
        <>
            <div className='page_title'>
                <p className='title'>Meus projetos</p>
                <span>
                <img className="icone" src={icone} />
                </span>
            </div>

            <div className='profile_card'>
                {/* className='profile_card_header' = display: flex; align-itens: space-between */}

                <div className='profile_card_body' id='profileCardBody'> 
                <div>
                    <Botao onClick={handleOpenModal} />
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>
                    {respostaAPI.map((e, index) =>

                        <div id={index} className='profile_card_body_real-oficial'>
                            <div className='profile_card_body_title'>
                                <p> {e.name} </p>
                            </div>
                            <div>
                            </div>
                            <div className='profile_card_body_content'>
                                <ul className='test'>
                                    {e.itens.map(itens => <li className={`card_itens ${itens.status} coisa`}>
                                        <h3>{itens.projectTitle}</h3>
                                        <p className='card_status' >{itens.status.replaceAll('_', ' ')}</p>
                                        <div className='card_coisas_em_baixo'>
                                            <p><strong>Duração estimada</strong> {itens.duration}</p>
                                            <p><strong>Descrição:</strong> {itens.description}</p>
                                        </div>
                                    </li>
                                    )}
                                </ul>
                            </div>
                        </div>

                    )}
                </div>
            </div></>
    );
}


export default Projetos;