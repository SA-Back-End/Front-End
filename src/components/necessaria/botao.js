
import React, { useState } from 'react';
import './arquivo.css';

export const Botao = ({ onClick }) => {
  return (
    <button className="botao" onClick={onClick}>
      Novo projeto+
    </button>
  );
};

export const botaoConstrucao =({ onClick, children })=> {
  return (
    <button className="botaoConstrucao" onClick={onClick}>
      {children}
    </button>
  );
};
