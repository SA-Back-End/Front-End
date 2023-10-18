import React, { useState } from 'react';
import axios from 'axios';

function InstitutionAdd() {
  const [inputText, setInputText] = useState("");
  const [inputType, setInputType] = useState("");

  const addInstitution = () => {
    if (!inputText.trim()) {
      alert('O nome da instituição é inválido!');
      return;
    }

    sessionStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJNYXJpYUJlYXRyaXoiLCJpYXQiOjE2OTc2NDk0MzYsImV4cCI6MTY5NzY1MzAzNn0.zHr6QSmAulsGMfyrb34207HFwqUlS6EHmvywAzgsqcw'); // Lembre-se de fornecer o token correto
    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const institutionData = {
        institution_name: inputText,
        institution_type: inputType || 'Faculdade',
      };

      axios.post('http://localhost:3000/institution/create', institutionData, config)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      alert('Nenhum token disponível');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nome da Instituição"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tipo de Instituição (Opcional)"
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
      />
      {/* Remova o botão "Adicionar Instituição" daqui, ele deve ser clicado no modal de Formacao.js */}
    </div>
  );
}

export default InstitutionAdd;
