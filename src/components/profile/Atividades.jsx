import EditAtividades from './EditAtividades';
import essaAqui from '../../assets/pencil.png';
import React, { useState } from 'react';

function Atividades() {
    const [showRegister, setshowRegister] = useState(false);

    const handleNotRegister = () => {
        setshowRegister(true);
    }

    if (showRegister) {
        return <EditAtividades />;
    }

    return (
        <div>
            <h1>Atividades</h1>
            <img src={essaAqui} alt="Editar" onClick={handleNotRegister} />
            <p>...</p>
        </div>
    );
}


export default Atividades;