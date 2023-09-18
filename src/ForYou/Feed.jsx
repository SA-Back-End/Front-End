import React, { useState, useEffect } from 'react';
import './Posts.css';
import Like from './like.png';
import Liked from './like_clicked.png';
import Comment from './comment.png';
import Arrow from './arrow.png';

const Feed = () => {

    const profilePicture = "https://i.ytimg.com/vi/oFIrA4Ef8tY/hqdefault.jpg";
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [dataLength, setDataLength] = useState()
    const [liked, setLiked] = useState({});

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

    const fetchData = async () => {
        setError(null);

        //Chamada do Back-End para apresentar os posts na página
        try {
            const response = await fetch(`http://localhost:3000/post/findAll/${page}`);
            const data = await response.json();
            console.log(data);

            if (data.length === 0) {
                console.log("Final da página");
            }
            else if (dataLength !== data.length) {
                setDataLength(data.length);
                setItems(prevItems => [...prevItems, ...data])
            }
            else if (dataLength === data.length) {
                console.log("Nem sei o que isso deveria fazer")
            }
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

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
                            <div><img src={profilePicture} width="30px" height="30px" alt={item.userId} id="profilePicture" hidden={!item.commentVisible}/></div>
                            <input id="comment" name="comment" placeholder="Comentário" hidden={!item.commentVisible}/>
                            <button id="submit" hidden={!item.commentVisible}><img src={Arrow} alt="Comentar" width="25px" height="30px" /></button>
                        </div>
                    </div>
                </React.Fragment>
            ))
            }
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div >
    )
};

export default Feed;