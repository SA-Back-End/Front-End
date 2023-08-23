import React from 'react';
import img from './img/profile.svg';
import './home.css';
import Filtro from './filter';

export default function Home() {
  return (
    <div className="App">
      <header className="box">

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
          <h3 className="name">Nome da pessoa</h3>
          <p>
            Lorem ipsum dolor sit amet. Sit deleniti sint id voluptas
          </p>
          <img src={img} className="profile" alt="image" />
        </div>
      </div>
    </div>
  );
}