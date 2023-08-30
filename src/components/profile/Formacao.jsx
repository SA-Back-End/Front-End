import EditFormacao from './EditFormacao';
import essaAqui from '../../assets/pencil.png';
import React, { useState } from 'react';

function Formacao() {
    const [showRegister, setshowRegister] = useState(false);

    const handleNotRegister = () => {
        setshowRegister(true);
    }

    if (showRegister) {
        return <EditFormacao />;
    }

    return (
        <div>
            <h1>Formação</h1>
            <img src={essaAqui} alt="Editar" onClick={handleNotRegister} />
            <p>...</p>
        </div>
    );
}


export default Formacao;