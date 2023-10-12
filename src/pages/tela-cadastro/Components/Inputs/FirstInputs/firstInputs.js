import './firstInputs.css';

export const FirstInputs = ({ userData, setUserData }) => {
    const handleChange = event => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="FirstInputs">
            <div className="nome">
                <input
                    type="text"
                    className="primeiro_nome"
                    name="firstName"
                    placeholder="Primeiro Nome"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="ultimo_nome"
                    name="lastName"
                    placeholder="Último Nome"
                    onChange={handleChange}
                />
            </div>
            <div className="user_email">
                <input
                    type="text"
                    className="usuario"
                    name="username"
                    placeholder="Nome de usuário"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};
