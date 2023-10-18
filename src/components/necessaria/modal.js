import React from "react";
import "./arquivo.css";
import Img from "../profile/img";
import ImgLaranja from "../profile/imgLaranja";

const Modal = ({ isOpen, onClose }) => {
  const modalClassName = isOpen ? "modal modal-open" : "modal";
  const handleClick = () => {
    alert("Página em construção!");
  };
  
  return (
    <div className={modalClassName}>
      <div className="modal-content">
        {/* <span className="close" onClick={onClose}>&times;</span> */}
        <h2 className="titulo">Adicionar Projeto</h2>
        <p className="p">Nome</p>
        <input></input>
        <p className="p">Área de Atuação</p>
        <input></input>
        <p className="p">Duração Estimada</p>
        <input></input>

        <div className="lados">
          <span className="statusDeAndamento">
            <p className="p">Status de Andamento</p>
            <select className="status_modalidade">
              <option value="" disabled selected hidden>
                Selecione uma opção
              </option>
              <option>Sketch</option>
              <option>Indisponível para participar</option>
              <option>Disponível para participar</option>
              <option>Concluido</option>
            </select>
          </span>

          <span className="modalidade">
            <p className="p">Modalidade</p>
            <select className="status_modalidade">
              <option value="" disabled selected hidden>
                Selecione uma opção
              </option>
              <option>Presencial</option>
              <option>Hibrido</option>
              <option>Remoto</option>
            </select>
          </span>
        </div>
        <h2>Cargos:</h2>
        <p className="p">Descrição</p>
        <input className="descricao"></input>
        <p className="p">Cargos</p>
        <input className="juntar"></input>

        <div className="CargosModal">
          <div className="lider">
            <div className="tituloLider">Liderança</div>
            <Img></Img>
          </div>
          <div className="engSoft">
            <div className="tituloEngSoft">Engenheiro de Software</div>
            <Img></Img>
          </div>

          <div className="engenheirosoft">
            <div className="tituloEngenheiroSoft">Engenheiro de Software</div>
            <Img></Img>
          </div>

          <div className="engenheirosof">
            <div className="tituloEngenheirosof">Engenheiro de Software</div>
            <Img></Img>
          </div>

          <div className="engenheirosoftwa">
            <div className="tituloCargoSoftwa">Engenheiro de Software</div>
            <Img></Img>
          </div>

          <div className="desenvolvedorLaranja">
            <div className="tituloDesenvolvedorLaranja">Desenvolvedor</div>
            <ImgLaranja></ImgLaranja>
          </div>
        </div>

        <button className="lateral" onClick={handleClick}>
          Adicionar{" "}
        </button>
        <br />
        <button className="azul" onClick={onClose}>
          Cancelar
        </button>
        <button className="laranja" onClick={handleClick}>
          Salvar
        </button>
      </div>
    </div>
  );
};

export default Modal;
