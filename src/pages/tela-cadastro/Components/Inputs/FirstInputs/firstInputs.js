import './firstInputs.css'

export let FirstInputs = () => {

    return (
        <div className='FirstInputs'>
            <div className="nome">
                <input type="text" className="primeiro_nome" placeholder='Primeiro Nome' />
                <input type="text" className="ultimo_nome" placeholder='Último Nome' />
            </div>
            <div className='user_email'>
                <input type="text" className="usuario" placeholder=' Nome de usuário' />
                <input type="text" className="email" placeholder='E-mail' />
            </div>
        </div>
    );
}