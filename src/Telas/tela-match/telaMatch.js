import React from 'react';
import './App.css';
import Filtro from './filter';

const App = () => {
    return (
        <div>
            <header></header>

            <div className="dropdown">
                <select>
                    <option value="participantes">Buscar participantes</option>
                    <option value="projetos">Buscar projetos</option>
                </select>
                <Filtro />
            </div>

            <div className="card">
                <h3>Nome da pessoa</h3>
                <p>Lorem ipsum dolor sit amet. Sit deleniti sint id voluptas</p>
            </div>
        </div>
    );
}

export default App;
