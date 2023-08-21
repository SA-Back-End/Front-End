import { useState } from "react";

function Status (){
    const [status, setStatus] = useState('Disponível');
    function changeStatus (){
        if (status === 'Disponível'){
            setStatus('Indisponível')
        } else{
            setStatus('Disponível')
        }
    }
    return(
            <div>
                <p onClick={changeStatus}>{status}</p>
            </div>
    )

}
export default Status;
