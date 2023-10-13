import { useState } from 'react';
import axios from 'axios';

const [inputText, setInputText] = useState("");
const [inputType, setInputType] = useState("");

const add = () => {
    if (!inputText.trim()) {
      alert('A instituição precisa de um nome válido!');
      return;
    }

    sessionStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJSb2RyaWdvTHVpcyIsImlhdCI6MTY5NzA0NjE0NCwiZXhwIjoxNjk3MDQ5NzQ0fQ.UO_qrvrRR5VVr4oGBwCn4PuL1ZPlfBg8oAeSG7F131Y')
    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const post_i_data = {
        institution_name: inputText,
        institutions_type: inputType || 'Faculdade', // Usará 'Faculdade' se o tipo não for especificado
      };

      axios.post('http://localhost:3000/post/create', post_i_data, config)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      alert('N TEM TOKEN');
    }
  };

  export default add ;