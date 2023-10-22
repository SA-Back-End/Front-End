import React from "react";
import "./ModalExp.css";

const Modal = ({ isOpen, onClose }) => {
    const modalClassName = isOpen ? "modal-open-exp" : "modal-exp";
    console.log(modalClassName)
    return (
        <div className={modalClassName}>
            <div className="modal-content-exp">
                {/* <span className="close" onClick={onClose}>&times;</span> */}
                <h2 className="titulo">Adicionar Experiência</h2>

                <span className="instituicaoEnsino">
                    <p className="p">Instituição</p>
                    <select className="instituicao">
                        <option value="" disabled selected hidden>
                            Selecione aqui
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </span>

                <p className="p">Cargo</p>
                <input></input>

                <span className="instituicaoEnsino">
                    <p className="p">Área de atuação</p>
                    <select className="instituicao">
                        <option value="" disabled selected hidden>
                            Selecione aqui
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </span>

                <div className="lados">
                    <span className="dataInicio">
                        <p className="p">Data de início</p>
                        <input type="date" className="dataConclusao" />
                    </span>

                    <span className="Dataconclusao">
                        <p className="p">Data de conclusão</p>
                        <input type="date" className="dataConclusao" />
                    </span>
                </div>

                <p className="p">Descrição das funções</p>
                <input className="descricao"></input>

                <button className="azul" onClick={onClose}>Cancelar</button>
                <button className="laranja">Salvar</button>
            </div>
        </div >
    );
};

export default Modal;