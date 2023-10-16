import React, { useState } from "react";
import "./Projetos.css";
import Botao from "../necessaria/botao";
import Modal from "../necessaria/modal";
import icone from "../img/icone.png";
import Img from "./img.js";
import ImgLaranja from "./imgLaranja";
import EditProjeto from "./edit.js";

function Projetos({ user }) {
  // const [showRegister, setshowRegister] = useState(false);s
  const liderando = [
    {
      projectTitle: "Lavagem de dinheiro",
      status: "Disponível_para_participar",
      occupationArea: "Contábeis",
      modalidaty: "Presencial",
      duration: "6 meses",
      description:
        "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    },
    {
      projectTitle: "Lavagem de dinheiro",
      status: "Disponível_para_participar",
      occupationArea: "Contábeis",
      modalidaty: "Presencial",
      duration: "6 meses",
      description:
        "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    },
    {
      projectTitle: "Lavagem de dinheiro",
      status: "Concluido",
      occupationArea: "Contábeis",
      modalidaty: "Presencial",
      duration: "6 meses",
      description:
        "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    },
  ];
  const participando = [
    {
      projectTitle: "Lavagem de money",
      status: "Disponível_para_participar",
      occupationArea: "Contábeis",
      modalidaty: "Presencial",
      duration: "6 meses",
      description:
        "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    },
    {
      projectTitle: "Lavagem de money",
      status: "Indisponível_para_participar",
      occupationArea: "Contábeis",
      modalidaty: "Presencial",
      duration: "6 meses",
      description:
        "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    },
  ];
  const concluido = [
    {
      projectTitle: "Lavagem de dindin",
      status: "Disponível_para_participar",
      occupationArea: "Contábeis",
      modalidaty: "Presencial",
      duration: "6 meses",
      description:
        "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    },
    {
      projectTitle: "Lavagem de dindin",
      status: "Disponível_para_participar",
      occupationArea: "Contábeis",
      modalidaty: "Presencial",
      duration: "6 meses",
      description:
        "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    },
    {
      projectTitle: "Lavagem de dindin",
      status: "Disponível_para_participar",
      occupationArea: "Contábeis",
      modalidaty: "Presencial",
      duration: "6 meses",
      description:
        "asdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassdaasdsadasdsadassda",
    },
  ];
  console.log(user);

  const respostaAPI = [
    { name: "liderando", itens: liderando },
    { name: "participando", itens: participando },
    { name: "concluído", itens: concluido },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [openCardIndices, setOpenCardIndices] = useState(
    Array(respostaAPI.length).fill(null)
  );

  const handleToggleCard = (groupIndex, cardIndex) => {
    const newOpenCardIndices = [...openCardIndices];
    newOpenCardIndices[groupIndex] =
      newOpenCardIndices[groupIndex] === cardIndex ? null : cardIndex;
    setOpenCardIndices(newOpenCardIndices);
  };
  
  return (
    <>
      <div className="page_title">
        <p className="title">Meus projetos</p>
        <span>
          <img className="icone" src={icone} />
        </span>
      </div>

      <div className="profile_card">
        {/* className='profile_card_header' = display: flex; align-itens: space-between */}

        <div className="profile_card_body" id="profileCardBody">
          <div>
            <Botao onClick={handleOpenModal} />
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>

          {respostaAPI.map((e, groupIndex) => (
            <div id={groupIndex} className="profile_card_body_real-oficial">
              <div className="profile_card_body_title">
                <p> {e.name} </p>  
              </div>
              <div className="profile_card_body_content">
                <ul className={`test`}>
                  {e.itens.map((itens, cardIndex) => (
                    <li
                      key={cardIndex}
                      className={`card_itens ${itens.status} ${
                        openCardIndices[groupIndex] === cardIndex
                          ? "liTaAberto"
                          : "liTaFechado"
                      }`}
                      onClick={() => handleToggleCard(groupIndex, cardIndex)}
                    >
                      <h3>{itens.projectTitle}</h3>
                     
                      <p className="card_status">
                        {itens.status.replaceAll("_", " ")}
                      </p>
                      <div className="card_coisas_em_baixo">
                        <p>
                          <strong>Área de Atuação: </strong>{" "}
                          {itens.occupationArea}
                        </p>
                        <p>
                          <strong>Duração estimada: </strong> {itens.duration}
                        </p>
                        <p>
                          <strong>Modalidade: </strong> {itens.modalidaty}
                        </p>
                        <p>
                          <strong>Descrição: </strong> {itens.description}
                        </p>
                      </div>

                      <div className="escondida">
                       <div className="editor">
                          <EditProjeto></EditProjeto>
                        </div><div>
                          <h2>Cargos:</h2>
                          <div className="lideranca">
                            <div className="tituloLideranca">Liderança</div>
                            <Img></Img>
                          </div>
                          <div className="engenheiro">
                            <div className="tituloEngenheiro">
                              Engenheiro de Software
                            </div>
                            <Img></Img>
                          </div>

                          <div className="engenheirosoftware">
                            <div className="tituloCargo">
                              Engenheiro de Software
                            </div>
                            <Img></Img>
                          </div>
                          <div className="engenheirolaranja">
                            <div className="titulodesenvolvedorlaranja">
                              Desenvolvedor
                            </div>
                            <ImgLaranja></ImgLaranja>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Projetos;
