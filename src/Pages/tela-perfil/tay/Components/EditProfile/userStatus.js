import { useState } from "react";

function Status() {
    const [status, setStatus] = useState('Disponível');

    function changeStatus() { //acho interessante mudar para um switch/case, visto que todos os 'resultados' são sabidos
        if (status === 'Disponível') {
            setStatus('Indisponível');
        } else if (status === 'Indisponível') {
            setStatus('Em Pausa');
        } else if (status === 'Em Pausa') {
            setStatus('Disponibilidade Limitada');
        }
        else if (status === 'Disponibilidade Limitada') {
            setStatus('Disponível');
        };

    }
    return (
        <div>
            <button onClick={changeStatus}>{status}</button>
        </div>
    )

}
export default Status;