import React from 'react';

function EscolhaProjetos({ selecao, itens, handleSelecaoChange }) {
    return (
        <div>
            <label>Escolha um item:</label>
            <select value={selecao} onChange={handleSelecaoChange}>
                <option value="">Selecione um item</option>
                {itens.length > 0 && itens.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            <p>Você selecionou: {selecao}</p>
        </div>
    );
}

export default EscolhaProjetos;