import {useState} from 'react'

const [formacoes, setFormacoes] = useState([]);

  const excluir = (id) => {
    const novaListaFormacao = formacoes.filter((formacao) => formacao.id !== id);
    setFormacoes(novaListaFormacao);
  };

export default excluir;