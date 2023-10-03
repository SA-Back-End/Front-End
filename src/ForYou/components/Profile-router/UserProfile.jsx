import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        //solicitação do servidor (não sei como fazer)
    }, [userId]);

    if (!user) {
        return <p>Carregando perfil do usuário...</p>;
    }

    return (
        <div>
            <h1>Perfil de {user.username}</h1>
        </div>
    );
};

export default UserProfile;