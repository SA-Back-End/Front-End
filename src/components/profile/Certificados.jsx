import EditCertificados from './EditCertificados';
import essaAqui from '../../assets/pencil.png';
import React, { useState } from 'react';

function Certificados() {
    const [showRegister, setshowRegister] = useState(false);

    const handleNotRegister = () => {
        setshowRegister(true);
    }

    if (showRegister) {
        return <EditCertificados />;
    }

    return (
        <div>
            <h1>Certificados</h1>
            <img src={essaAqui} alt="Editar" onClick={handleNotRegister} />
            <p>...</p>
        </div>
    );
}


export default Certificados;