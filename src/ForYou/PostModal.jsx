import React, { useState } from 'react';
import './Posts.css'
import axios from 'axios'

function PostModal({ onClose, onPost }) {
  const [postText, setPostText] = useState('');



  const handlePostSubmit = () => {

    if(!postText.trim()){
      alert('A postagem necessita de texto!')
      return;
    }
    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      axios.get('http://localhost:3000/auth/profile', config)
        .then(res => {
          const user_data = res.data;

          const post_data = {
            userId: user_data.id,
            text: postText,
            post_img: [
              "U3dhZ2dlciByb2Nrcw=="
            ]
          }

          axios.post('http://localhost:3000/post/create', post_data, config)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error)
        })

      onPost(postText);
      onClose();
    } else {
      alert('N TEM TOKEN')
    }
  };

  return (
    <div className="post-modal">
      <textarea
        rows="4"
        placeholder="Como Andam Seus Projetos?"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <div className="post-modal-buttons">
        <button onClick={handlePostSubmit} className="send-button">Enviar</button>
        <button onClick={onClose} className="cancel-button">Cancelar</button>
      </div>
    </div>
  );
}

export default PostModal;