import React, { useState } from 'react';

function InputProjetos({ adicionarItem }) {
  const [novoItem, setNovoItem] = useState('');

  const handleNovoItemChange = (event) => {
    setNovoItem(event.target.value);
  };

  const handleAdicionarItem = () => {
    if (novoItem.trim() !== '') {
      adicionarItem(novoItem);
      setNovoItem('');
    }
  };

  return (
    <div>
      <label>Adicionar novo item:</label>
      <input
        type="text"
        value={novoItem}
        onChange={handleNovoItemChange}
      />
      <button onClick={handleAdicionarItem}>Adicionar</button>
    </div>
  );
}

export default InputProjetos;