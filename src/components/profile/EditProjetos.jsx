import React, { useState } from 'react';
import EscolhaProjetos from './EscolhaProjetos';
import InputProjetos from './InputProjetos';

function MeuComponente() {
  const [selecao, setSelecao] = useState('');
  const [itens, setItens] = useState([]);

  const handleSelecaoChange = (event) => {
    setSelecao(event.target.value);
  };

  const adicionarItem = (novoItem) => {
    setItens([...itens, novoItem]);
  };

  return (
    <div>
      <EscolhaProjetos selecao={selecao} itens={itens} handleSelecaoChange={handleSelecaoChange} />
      <InputProjetos adicionarItem={adicionarItem} />
    </div>
  );
}

export default MeuComponente;