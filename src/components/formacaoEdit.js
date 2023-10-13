import React, { useState } from "react";
import axios from "axios";
import add from './institutionAdd'
import excluir from './formationDelete'

function Formacao() {
  

  return (
    <>
      <p><b>Instituição de Ensino</b></p>
      <input
        type="text"
        name="forma"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <p><b>Tipo de Instituição</b></p>
      <input
        type="text"
        name="tipo"
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
      />
      <button onClick={add}>Adicionar</button>
      <div id="forma-lista">
        {formacoes.map((formacao) => (
          <div key={formacao.id}>
            <p><b>{formacao.texto}</b></p>
            <select name='ensino'>
              <option value="Ensino-Fundamental">Ensino Fundamental</option>
              <option value="EM">Ensino Médio</option>
              <option value="ET">Ensino Técnico</option>
              <option value="GR">Graduação</option>
              <option value="PG">Pós-Graduação</option>
              <option value="Me">Mestrado</option>
              <option value="Dou">Doutorado</option>
              <option value="PDou">Pós-Doutorado</option>
            </select>
            <div>
              <div>
                <div>
                  <p>Insira a data de inicio</p>
                  <input id="date" type="date" />
                </div>
                <div>
                  <p>Insira a data do fim (ou previsão)</p>
                  <input id="date" type="date" />
                </div>
              </div>
              <p><b>Descrição</b></p>
              <textarea placeholder="digite aqui"></textarea>
            </div>
            <button onClick={() => excluir(formacao.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Formacao;
