import './secondInputs.css';
import Data from './../Data/data.js'
import { useState } from 'react';

function SecondInputs(props) {

    // const verificarSenhasIguais = () => {
    //     const senha = document.getElementById('senha').value;
    //     const confirmarSenha = document.getElementById('confirmar_senha').value;
    //     if (senha === confirmarSenha) {
    //         alert('Senhas iguais')
    //         return true;
    //     } else {
    //         alert('Senhas incorretas')
    //     }
    // }

    const [userBirthDate, setBirthDate] = useState()
    const getBirthDate = (birthDate) => {
        setBirthDate(birthDate)
    }

    const handleInputUpdate = () => {

        const birthDate = userBirthDate
        const state = document.getElementById('state').value
        const password = document.getElementById('senha').value

        const data = {
            birthDate: birthDate,
            state: state,
            password: password
        }

        props.onFormUpdate(data)
    }

    return (
        <div className='SecondInputs'>
            <Data onDateUpdate={getBirthDate}></Data>
            <select className='unidades' placeholder='Unidade Federativa' id='state'>
                <option value="">Selecione um estado</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
            </select>
            <div className="credenciais">
                <input type="password" className="senha" id="senha" placeholder='Senha' onChange={handleInputUpdate}/><br />
                <input type="password" className="confirmar_senha" id="confirmar_senha" placeholder='Confirmar senha' /><br />
            </div>
        </div>
    );
}

export default SecondInputs;