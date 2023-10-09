import React from 'react';

const DropdownEstado = ({ estados, onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="">Selecione um estado</option>
      {estados.map((estado, index) => (
        <option key={index} value={estado}>
          {estado}
        </option>
      ))}
    </select>
  );
};

export default DropdownEstado;
