import React, { useState } from 'react';
import './EditarPerfil.css'

function EditarPerfil() {
  const handleClick = event => {
    console.log(event.target);

    alert('Aletrações Feitas Com Sucesso')
  }
  return (
    <div>
      <h1>Editar</h1>
      {/* <img src={Lapis} alt="Editar" /> */}
      <form action="/pagina-processa-dados-do-form" method="post">
        <div className='center'>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" />
        </div>
        <div className='center'>
          <label for="email">E-mail:</label>
          <input type="email" id="email" />
        </div>
        <div className='center'>
          <label for="senha">Senha:</label>
          <input type="senha" id="senha" />
        </div>
        <div className='center'>
          <label for='Data de Nascimento'>Data de Nasimento</label>
          <input type="text" class="" id="Data de Nascimento" />
        </div>
      </form>
      <br></br>
        <button onClick={handleClick}>Deletar</button>
        <button onClick={handleClick}>Salvar</button>
        <button onClick={handleClick}>Sair</button>
      <div>
      </div>
    </div>
  )

}

export default EditarPerfil;