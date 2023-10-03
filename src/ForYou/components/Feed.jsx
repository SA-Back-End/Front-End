import React, { useState, useEffect } from 'react';
import './Posts.css';
import Like from '../img/like.png';
import Liked from '../img/like_clicked.png';
import Comment from '../img/comment.png';
import Arrow from '../img/arrow.png';
import { link } from 'react-router-dom';

// Importe as funções exportadas
import { toggleLike } from './Like';
import { toggleComment, addComment } from './Coment';

const Feed = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [dataLength, setDataLength] = useState(0);
    const [liked, setLiked] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const fetchData = async () => {
        setError(null);

        try {
            const response = await fetch(`http://localhost:3000/post/findAll/${page}`);
            const data = await response.json();

            // Mapeia os dados e busca informações de usuário para cada comentário
            const itemsWithUserDetails = await Promise.all(
                data.map(async (item) => {
                    // Consulta o servidor para obter os detalhes do usuário
                    const userResponse = await fetch(`http://localhost:3000/user/${item.userId}`);
                    const userData = await userResponse.json();

                    // Combina os dados do usuário com os dados do comentário
                    const itemWithUser = {
                        ...item,
                        userProfileImageUrl: userData.profileImageUrl, // Substituir pela propriedade correta com a URL da foto de perfil
                        username: userData.username, // Substituir pela propriedade correta com o nome de usuário
                    };

                    return itemWithUser;
                })
            );

            if (itemsWithUserDetails.length === 0) {
                console.log("Final da página");
            } else if (dataLength !== itemsWithUserDetails.length) {
                setDataLength(itemsWithUserDetails.length);
                setItems((prevItems) => [...prevItems, ...itemsWithUserDetails]);
            } else if (dataLength === itemsWithUserDetails.length) {
                console.log("Nem sei o que isso deveria fazer");
            }
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    // Função para lidar com o clique no botão de curtir
    const handleLikeClick = (id_post) => {
        toggleLike(id_post, liked, setLiked);
    };

    // Função para lidar com o clique no botão de comentário
    const handleCommentClick = (postId) => {
        toggleComment(postId, items, setItems);
    };

    // Função para adicionar um novo comentário
    const handleAddComment = (postId) => {
        addComment(postId, newComment, setItems);
        // Limpa o campo de comentário após a adição
        setNewComment('');
    };

    //Coloca o FetchData em uso ao abrir ou recarregar a página
    useEffect(() => {
        fetchData();
    }, []);

    //Verifica se o final da tela foi alcançado e faz a chamada do FetchData
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        fetchData();
    };

    //Verifica se o final da tela foi alcançado e faz a chamada do handleScroll.
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    //retorna os valores do Back-end como HTML
    return (
        <div>
            {items.map(item => (
                <React.Fragment key={item.userId}>
                    <div className="Post">
                        <div className="Post-header">
                            <div><img src={item.user.profileImageUrl} width="60px" height="60px" alt={item.userId} id="profilePicture" /></div>
                            <div><strong><Link to={`/user/${item.user.userId}`}>{item.user.username}</Link></strong></div> {/*Link aqui*/}
                        </div>
                        <div className="Post-content">
                            <div>{item.status}</div>
                            <div>{item.text}</div>
                            <div>{item.likedBy}</div>
                        </div>
                        <div className="Post-action">
                            <div>
                                <button
                                    className={`action-button like-button ${liked[item.id_post] ? 'liked' : ''}`}
                                    onClick={() => handleLikeClick(item.id_post)}
                                    id="like"
                                >
                                    <img
                                        src={liked[item.id_post] ? Liked : Like} //Troca a imagem do like quando for dado o like
                                        width="30px"
                                        height="30px"
                                        alt="Curtir"
                                    />
                                </button>

                                <button
                                    className={`action-button comment-button ${item.id_post}`}
                                    onClick={() => handleCommentClick(item.id_post)}
                                    id="comment-button"
                                >
                                    <img
                                        src={Comment}
                                        width="30px"
                                        height="30px"
                                        alt="Comentar" />
                                </button>
                            </div>
                        </div>

                        <div className="Comment-section">
                            <div><img src={item.user.profileImageUrl} width="30px" height="30px" alt={item.userId} id="profilePicture" hidden={!item.commentVisible} /></div>
                            <input
                                type="text"
                                placeholder="Digite seu Comentario..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                            <button onClick={() => handleAddComment(item.id_post)}><img src={Arrow} alt="Comentar" width="25px" height="30px" /></button>

                            <div className="Mini-comment-section">
                                <div className="Mini-comment-section">
                                    {comments
                                        .filter((comment) => comment.postId === item.id_post)
                                        .map((comment) => (
                                            <div key={comment.id} className="Comment">
                                                <div className="Comment-content">
                                                    <strong>{comment.username}</strong>: {comment.text}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    )
};


// Adicione o estado showMorePosts
const [showMorePosts, setShowMorePosts] = useState(false);

// Crie a função handleShowMorePosts
const handleShowMorePosts = () => {
    setShowMorePosts(!showMorePosts);
};

// No retorno JSX, atualize a renderização dos posts de perfis não seguidos
{
    showMorePosts &&
    items
        .filter(item => !item.isFollowed)   // verificação (se é seguidor ou não)
        .map(item => (
            <React.Fragment key={item.userId}>
                <div className="Post">
                    {/* conteúdo do post */}
                </div>
            </React.Fragment>
        ))
}

// Adicione um botão "Ver mais" no final da lista de posts
<button onClick={handleShowMorePosts}>
    {showMorePosts ? 'Ver menos' : 'Ver mais'}
</button>


export default Feed;
