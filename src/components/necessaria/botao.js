
import React, { useState } from 'react';
import './arquivo.css';

const Botao = ({ onClick }) => {
  return (
    <button className="botao" onClick={onClick}>
      Novo projeto+
    </button>
  );
};

export default Botao;