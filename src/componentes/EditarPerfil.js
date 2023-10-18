import React, { useState } from 'react';
import './EditarPerfil.css'
import Swal from 'sweetalert2'
import Sair from './sair.png'
import { CiLogout } from 'react-icons/ci'


async function alertPasswordInput() {
  let password = '';
  while (!password) {
    const { value: inputPassword } = await Swal.fire({
      title: 'Para efetuar as mudanças nas informações da sua conta, confirme sua identidade.',
      input: 'password',
      inputLabel: 'Informe sua senha',
      inputPlaceholder: 'Insira Sua Senha',
    });
    password = inputPassword;
  }
  return password;
}

function alertExclude() {
  Swal.fire({
    title: 'Aviso!',
    text: 'Você tem certeza que deseja excluir sua conta? você não poderá recuperá-la depois.',
    icon: 'warning',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: `Excluir`,
    confirmButtonColor: '#fc8200',
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#0052E0',
  }).then(async (result) => {
    if (result.isConfirmed) {
      await alertPasswordInput();

      Swal.fire(
        'Excluído!',
        'Sua conta foi excluída com sucesso.',
        'success'
      );
    }
  });
}

async function alertSalvar() {

  const password = await alertPasswordInput();

  if (password) {
    Swal.fire('Salvo!', 'Suas informações foram salvas com sucesso.', 'success')
  }
}


function EditarPerfil() {
  const handleClick = event => {
    console.log(event.target);

    alert('Aletrações Feitas Com Sucesso')
  }
  return (
    <div className='divMommy'>
      <h1>Óla, xxxx</h1>

      <div class="centerP">

        <p>Altere e/ou exclua suas informações pessoais</p>

      </div>

      <div class="centerP2">

        <p> *Essa informação será compartilhada com seu público</p>

      </div>

      <form action="/pagina-processa-dados-do-form" method="post">
        <div className='centerN'>
          <label for="nome">Login:</label>
          <input type="text" id="login" />
        </div>

        <div className='centerE'>
          <label for="email">E-mail:</label>
          <input type="email" id="email" />
        </div>

        <div className='centerS'>
          <label for="senha">Senha:</label>
          <input type="senha" id="senha" />
        </div>

        <div className='centerC'>
          <label for="contato">Contato:</label>
          <input type="link" id="link" />
        </div>

      </form>

      <div class="fundo">
      </div>

      <button class="button" onclick="">Cancelar</button>

      <button class="butdelt" onClick={alertExclude}> Excluir Conta</button>

      <button class="buttonS" onClick={alertSalvar}>salvar</button>

      <div className='div-butsair'>
        <CiLogout style={{
          fontSize: 20,
          margin: 3
          // position:'absolute',
          // top: 207,
          // left: 1160
        }} />
        <button class="butsair">Sair</button>
      </div>


    </div>
  )

}
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

export default EditarPerfil;
