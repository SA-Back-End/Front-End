import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import Botao from "./botao";

function Formacao() {
  const [formacoes, setFormacoes] = useState([]);
  const [inputText, setInputText] = useState("");

  const add = () => {
    if (inputText) {
      // Crie um objeto para representar a formação e adicione-o à lista de formação
      const novaFormacao = {
        id: Date.now(), // Usando a data/hora atual como ID único (você pode ajustar isso conforme necessário)
        texto: inputText,
      };
      //adcionar a instituição na lista
      axios.post('/institution/create', {
        institution_name:inputText, institutions_type:ensino?
      })

      setFormacoes([...formacoes, novaFormacao]);
      setInputText(""); // Limpe o input
    }
  };

  const excluir = (id) => {
    // Filtra a lista de formação para remover o item com o ID correspondente
    const novaListaFormacao = formacoes.filter((formacao) => formacao.id !== id);
    setFormacoes(novaListaFormacao);
  };

  return (
    <>
    <p><b>Instituição de Ensino</b></p>
      <input
        type="text"
        name="forma"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={add}>Adicionar</button>
      <div id="forma-lista">
        {formacoes.map((formacao) => (
          <div  key={formacao.id}>
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