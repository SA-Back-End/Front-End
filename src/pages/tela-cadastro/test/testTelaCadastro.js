import Data from '../Components/Data/data';
import './testTelaCadastro.css';

const TestTelaCadastro = () => {
    return (
        <div className='test-tela-cadastro'>
            <div className='test-telaCadastro-container-principal'>
                <div className='test-telaCadastro-container-principal-topo'>
                    <h1 className='test-h1'>S K I L L S</h1>
                </div>
                <div className='test-telaCadastro-container-principal-inputs'>
                    <div className='test-div-inputs'>
                        <input className='test-telaCadastro-inputs' placeholder='Nome'></input>
                    </div>

                    <div className='test-div-inputs'>
                        <input className='test-telaCadastro-inputs' placeholder='Sobrenome'></input>
                    </div>

                    <div className='test-div-inputs'>
                        <input className='test-telaCadastro-inputs' placeholder='Nome de usuário'></input>
                    </div>

                    <div className='test-div-inputs'>
                        <input className='test-telaCadastro-inputs' placeholder='Email'></input>
                    </div>

                    <div className='test-div-inputs'>
                        <input className='test-telaCadastro-inputs' placeholder='Senha'></input>
                    </div>

                    <Data></Data>

                </div>
                <div className='test-telaCadastro-container-principal-submit'>
                    <button>Cadastrar</button>
                </div>
            </div>
        </div>
    );
}
export default TestTelaCadastro