import InputProjetos from './InputProjetos';
import essaAqui from '../../assets/pencil.png';
import React, { useState } from 'react';

function Projetos() {
    const [showRegister, setshowRegister] = useState(false);

    const handleNotRegister = () => {
        setshowRegister(true);
    }

    if (showRegister) {
        return <InputProjetos />;
        
    }

    return (
        <div>
            <h1>Projetos</h1>
            <img src={essaAqui} alt="Editar" onClick={handleNotRegister} />
            <p>...</p>
        </div>
    );
}


export default Projetos;