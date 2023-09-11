import React, { useState, useEffect } from 'react';
import './Posts.css';
import Like from './like.png';
import Liked from './like_clicked.png';
import Comment from './comment.png';

const Feed = () => {

    const profilePicture = "https://i.ytimg.com/vi/oFIrA4Ef8tY/hqdefault.jpg";
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [dataLength, setDataLength] = useState()
    const [liked, setLiked] = useState({});
    const [commented, setCommented] = useState(false)

    /*função 'likado'*/

    const toggleLike = (postId) => {
        setLiked((prevLiked) => ({
            ...prevLiked,
            [postId]: !prevLiked[postId],
        }));
    };


    const fetchData = async () => {
        setError(null);

        try {
            const response = await fetch(`http://localhost:3000/user/findAll/${page}`);
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

    useEffect(() => {
        fetchData();
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        fetchData();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    return (
        <div>
            {items.map(item => (
                <React.Fragment key={item.id_user}>
                    <div className="Post">
                        <div className="Post-header">
                            <div><img src={profilePicture} width="60px" height="60px" alt={item.username} id="profilePicture" /></div>
                            <div><strong>{item.username}</strong></div>
                        </div>
                        <div className="Post-content">
                            <div>{item.status}</div>
                            <div>{item.firstName}</div>
                            <div>{item.lastName}</div>
                            <div>{item.email}</div>
                            <div>{item.description}</div>
                            <div>{item.birthDate}</div>
                            <div>{item.state}</div>
                        </div>
                        <div className="Post-action">
                            <div>
                                <button
                                    className={`action-button like-button ${liked[item.username] ? 'liked' : ''}`}
                                    onClick={() => toggleLike(item.username)} // Use o id da postagem como argumento
                                    id="like"
                                >
                                    <img
                                        src={liked[item.username] ? Liked : Like} // Use LikeRed quando liked for verdadeiro, senão, use LikeGray
                                        width="30px"
                                        height="30px"
                                        alt="Curtir"
                                    />
                                </button>

                                <button id="comment"><img src={Comment} width="30px" height="30px" alt="Comentar" /></button>
                            </div>
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