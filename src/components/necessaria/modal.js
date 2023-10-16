import React from "react";
import "./arquivo.css";
import { Link } from 'react-router-dom';
import Projetos from '../profile/Projetos.js'

const Modal = ({ isOpen, onClose }) => {
  const modalClassName = isOpen ? "modal modal-open" : "modal";
  
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
            <select
              className="status_modalidade"
              placeholder="Status de Andamento"
            >
              <option>Status de Andamento</option>
              <option>Indisponível para participar</option>
              <option>Disponível para participar</option>
            </select>
          </span>

          <span className="modalidade">
            <p className="p">Modalidade</p>
            <select className="status_modalidade" placeholder="Modalidade">
              <option>Modalidade</option>
              <option>Presencial</option>
              <option>Hibrido</option>
              <option>Home Office</option>
            </select>
          </span>
        </div>

        <p className="p">Descrição</p>
        <input className="descricao"></input>
        <p className="p">Cargos</p>
        <input className="juntar"></input>
        <button className="lateral">Adicionar</button>
        <br />
        <button className="azul">Cancelar</button>
        <button className="laranja">Salvar</button>
      </div>
    </div>
  );
};

export default Modal;
