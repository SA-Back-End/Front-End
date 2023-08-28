import React from 'react';
import './Match.css';
import Filtro from './filter';

export default function Home() {
  return (
    <div>
      <header>

      </header>

      <div className="dropdown">
        <select>
          <option value="participantes">Buscar participantes</option>
          <option value="projetos">Buscar projetos</option>
        </select>
        <Filtro></Filtro>
      </div>

      <div className='container'>
        <div className="card">
          <h3>Nome da pessoa</h3>
          <p>
            Lorem ipsum dolor sit amet. Sit deleniti sint id voluptas
          </p>
        </div>
      </div>
    </div>
  );
}