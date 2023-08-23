import { useState } from "react";

function Status (){
    const [status, setStatus] = useState('Disponível');

    function changeStatus() {
        if (status === 'Indisponível') {
            setStatus('Indisponível');
        } else if (status === 'Em Pausa') {
            setStatus('Em Pausa');
        } else if (status === 'Disponibilidade Limitada') {
            setStatus('Disponibilidade Limitada');
        }
    }
    return(
            <div>
                <p onClick={changeStatus}>{status}</p>
            </div>
    )

}
export default Status;
