import React, { useState, useEffect } from 'react';
import './Posts.css';
import Like from './like.png';
import Liked from './like_clicked.png';
import Comment from './comment.png';
import Arrow from './arrow.png';

const Feed = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [dataLength, setDataLength] = useState();
    const [liked, setLiked] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    //Define se foi dado o like ou não
    const toggleLike = (id_post) => {
        setLiked((prevLiked) => ({
            ...prevLiked,
            [id_post]: !prevLiked[id_post],
        }));
    };

    //Troca a visibilidade da barra de comentário
    const toggleComment = (postId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id_post === postId
                    ? { ...item, commentVisible: !item.commentVisible }
                    : item
            )
        );
    };

    // "Mandar o comentário para o banco" --> Nunca vai acontecer 
    const addComment = async (userId, postId, newCommentText) => {
        try {
            const response = await fetch(`http://localhost:3000/post/${postId}/comment`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, text: newCommentText }),
            });

            if (response.ok) {
                console.log('hfO07OU0x0zEmDgDcNohhiUI1qtriBEDNGon-SVRIfA')
            } else {
                console.error('Erro ao enviar o comentário para o servidor');
            }
        } catch (error) {
            console.error('Erro ao enviar o comentário:', error);
        }
    };


    const fetchData = async () => {
        setError(null);

        try {
            const response = await fetch(`http://localhost:3000/post/findAll/${page}`);
            const data = await response.json();

            // Mapeia os dados e busca informações de usuário para cada comentário
            const itemsWithUserDetails = await Promise.all(
                data.map(async (item) => {
                    // Consulta o servidor para obter os detalhes do usuário
                    const userResponse = await fetch(`http://localhost:3000/user/${item.userId}`); // Mudar para a rota correta
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
                            <div><img src={profilePicture} width="60px" height="60px" alt={item.userId} id="profilePicture" /></div>
                            <div><strong>{item.user.username}</strong></div>
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
                                    onClick={() => toggleLike(item.id_post)}
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
                                    onClick={() => toggleComment(item.id_post)}
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


                            <div><img src={profilePicture} width="30px" height="30px" alt={item.userId} id="profilePicture" hidden={!item.commentVisible} /></div>
                            <input
                                type="text"
                                placeholder="Digite seu Comentario..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                            <button onClick={() => addComment(item.user.user_id, item.id, newComment)}><img src={Arrow} alt="Comentar" width="25px" height="30px" /></button>

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
            ))
            }
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    )
};

export default Feed;