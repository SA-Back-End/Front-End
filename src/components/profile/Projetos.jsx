import React, { useState } from 'react';
import "./Projetos.css";

function Projetos({ user }) {
    // const [showRegister, setshowRegister] = useState(false);

    const liderando = [{
        projectTitle: "Lavagem de dinheiro",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassda",
    }, {
        projectTitle: "Lavagem de dinheiro",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassda",
    }, {
        projectTitle: "Lavagem de dinheiro",
        status: "Concluido",
        duration: "6 meses",
        description: "asdsadasdsadassda",
    }];
    const participando = [{
        projectTitle: "Lavagem de money",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassda",
    }, {
        projectTitle: "Lavagem de money",
        status: "Indisponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassda",
    }, {
        projectTitle: "Lavagem de money",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassda",
    }];
    const concluido = [{
        projectTitle: "Lavagem de dindin",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassda",
    }, {
        projectTitle: "Lavagem de dindin",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassda",
    }, {
        projectTitle: "Lavagem de dindin",
        status: "Disponível_para_participar",
        duration: "6 meses",
        description: "asdsadasdsadassda",
    }];

    console.log(user)

    const respostaAPI = [{ name: "liderando", itens: liderando }, { name: 'participando', itens: participando }, { name: 'concluido', itens: concluido }];

    // const handleNotRegister = () => {
    //     setshowRegister(true);
    // }

    // if (showRegister) {
    //     return <InputProjetos />;
    // }

    return (
        <><div className='page_title'>
            <p>Meus projetos</p>
        </div><div className='profile_card'>
                {/* className='profile_card_header' = display: flex; align-itens: space-between */}
                <div className='profile_card_body' id='profileCardBody'>
                    {respostaAPI.map(e => <div>
                        <div className='profile_card_body_title'>
                            <p> {e.name} </p>
                        </div>
                        <div className='profile_card_body_content'>
                            <ul>
                                {e.itens.map(itens => <li className={`card_itens ${itens.status}`}>
                                    <p>{itens.projectTitle}</p>
                                    <p>{itens.status}</p>
                                    <p>{itens.duration}</p>
                                    <p>{itens.description}</p>
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