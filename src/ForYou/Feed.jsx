import React, { useState, useEffect } from 'react';
import './Posts.css';
import Like from './img/like.png';
import Liked from './img/like_clicked.png';
import Comment from './img/comment.png';
import Arrow from './img/arrow.png';
import ProfilePicture from './img/perfil.png';
import PostModal from './PostModal'

const Feed = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [dataLength, setDataLength] = useState();
    const [liked, setLiked] = useState({});
    const [comment2, setCommentText] = useState();
    const [postText, setPostText] = useState('');
    const [isPostSectionVisible, setIsPostSectionVisable] = useState(false);


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

    const openPostSection = () => {
        setIsPostSectionVisable(true);
    };

    const closePostSection = () => {
        setIsPostSectionVisable(false);
        setPostText('');
    }

    const sharePost = () => {
        // Envio da postagem para o banco de dados;
        closePostSection();
    }

    const handlePostSubmit = (newPostText) => {
        //envio da postagem para o banco de dados
        //adicionar a postagem para a lista de itens
        const newPost = {
            id_post: items.length + 1, //item de id_post
            text: newPostText,
            //propriedades da postagem
        };
        setItems((prevItems) => [newPost, ...prevItems]);
    };

    const fetchData = async () => {
        setError(null);

        //Chamada do Back-End para apresentar os posts na página
        try {
            const response = await fetch(`http://localhost:3000/post/findAll/${page}`);
            const data = await response.json();
            console.log(data);
            for(var i = 0; i < data.length; i++) {
                for(var ii = 0; ii < data[i].post_img.length; ii++) {
                    const buffer = data[i].post_img[ii].data;
                    const binaryString = String.fromCharCode.apply(null, buffer);
                    const converted = btoa(binaryString);
                    console.log(converted);
                    data[i].post_img[ii].data = converted;
                    console.log(data[i].post_img[ii].data);
                }
            }
            
            

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

            <div className="Pesquisa">
                <h4>S K I L L S</h4>
                <input type="text"></input>
                
            </div>

            
                <div className = "PostMaker">
                    <button onClick={openPostSection} className="cancel-button">Compartilhar</button>

                </div>
            

            {items.map(item => (
                <React.Fragment key={item.userId}>
                    <div className="Post">
                        
                        <div className="Post-content">

                            <div id="post-image"><img src={`data:image/jpg;base64,${item.post_img[0].data}`} /></div>
                            <div>

                                <div className="Post-header">
                                    <div><img src={ProfilePicture} width="60px" height="60px" alt={item.userId} id="profilePicture" /></div>
                                    <div><strong>{item.username}</strong></div>
                                </div>

                                <div>{item.status}</div>
                                <div id="text">{item.text}</div>
                                <div>{item.likedBy}</div>
                                <div className={`Post-action ${item.id_post}`}>

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
                        </div>
                    </div>
 
                        <div className="Comment-section">
                            <div><img src={ProfilePicture} width="30px" height="30px" alt={item.userId} id="profilePicture" hidden={!item.commentVisible}/></div>
                            <input className='comments' id={`comment${item.id_post}`} name="comment" placeholder="Comentário" hidden={!item.commentVisible}/>
                            <button id="submit" hidden={!item.commentVisible}><img src={Arrow} alt="Comentar" width="25px" height="30px" /></button>
                        </div>
                    </div>
                </React.Fragment>
             ))
            }
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {isPostSectionVisible && (
                <div className="overlay">
                    <PostModal onClose={closePostSection} onPost={handlePostSubmit} />
                </div>
            )}
        </div >
    )
};

export default Feed;