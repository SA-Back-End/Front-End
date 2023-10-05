import React, { useState } from 'react';
import './Posts.css'

function PostModal({ onClose, onPost }) {
  const [postText, setPostText] = useState('');

  const handlePostSubmit = () => {
    // Envio da postagem
    // Chamar onPost para enviar os dados da postagem
    onPost(postText);
    onClose();
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