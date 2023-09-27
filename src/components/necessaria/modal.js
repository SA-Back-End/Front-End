import React from 'react';
import './arquivo.css';
import Dropdown from './dropdown';
import Dropdown2 from './modalidade';

const Modal = ({ isOpen, onClose }) => {
  const modalClassName = isOpen ? 'modal modal-open' : 'modal';

  return (
    <div className={modalClassName}>
      <div className="modal-content">
        {/* <span className="close" onClick={onClose}>&times;</span> */}
        <h2 className='titulo'>Adicionar Projeto</h2>
        <p>Nome</p>
        <input></input>
        <p>Área de Atuação</p>
        <input></input>
        <p>Duração Estimada</p>
        <input></input>
        <p>Status de Andamento</p>
        <Dropdown/>
        <div className='linha'>
          <p>Modalidade</p>
          <Dropdown2></Dropdown2>
        </div>
        <p>Descrição</p>
        <input className='descricao'></input>
        <p>Cargos</p>
        <input className='juntar'></input><button className="lateral">Adicionar</button>
        <br />
        <button className="azul">Cancelar</button>
        <button className="laranja">Salvar</button>
      </div>
    </div>
  );
};

export default Modal;
