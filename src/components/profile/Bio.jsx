import EditProfile from './EditProfile';
import essaAqui from '../../assets/pencil.png';
import React, { useState } from 'react';

function Bio() {
    const [showRegister, setshowRegister] = useState(false);

    const handleNotRegister = () => {
        setshowRegister(true);
    }

    if (showRegister) {
        return <EditProfile />;
    }

    return (
        <div>
            <h1>Experiência</h1>
            <img src={essaAqui} alt="Editar" onClick={handleNotRegister} />
            <p>...</p>
        </div>
    );
}


export default Bio;