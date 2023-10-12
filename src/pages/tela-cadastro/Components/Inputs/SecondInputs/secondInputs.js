import './secondInputs.css';
import Data from './../Data/data.js'

function SecondInputs() {

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

    return (
        <div className='SecondInputs'>
            <Data></Data>
            <select className='unidades' placeholder='Unidade Federativa'>
                <option>Selecione um estado</option>
                <option>Acre</option>
                <option>Alagoas</option>
                <option>Amapá</option>
                <option>Amazonas</option>
                <option>Bahia</option>
                <option>Ceará</option>
                <option>Distrito Federal</option>
                <option>Espírito Santo</option>
                <option>Goiás</option>
                <option>Maranhão</option>
                <option>Mato Grosso</option>
                <option>Mato Grosso do Sul</option>
                <option>Minas Gerais</option>
                <option>Pará</option>
                <option>Paraíba</option>
                <option>Paraná</option>
                <option>Pernambuco</option>
                <option>Piauí</option>
                <option>Rio de Janeiro</option>
                <option>Rio Grande do Norte</option>
                <option>Rio Grande do Sul</option>
                <option>Rondônia</option>
                <option>Roraima</option>
                <option>Santa Catarina</option>
                <option>São Paulo</option>
                <option>Sergipe</option>
                <option>Tocantins</option>
            </select>
            <div className="credenciais">
                <input type="password" className="senha" id="senha" placeholder='Senha' /><br />
                <input type="password" className="confirmar_senha" id="confirmar_senha" placeholder='Confirmar senha' /><br />
            </div>
        </div>
    );
}

export default SecondInputs;