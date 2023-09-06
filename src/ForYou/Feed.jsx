import React, { useState, useEffect } from 'react';
import './Posts.css';
import Like from './like.png';
import Comment from './comment.png';

const Feed = () => {

    const profilePicture = "https://i.ytimg.com/vi/oFIrA4Ef8tY/hqdefault.jpg";
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [dataLength, setDataLength] = useState()
    const [liked, setLiked] = useState(false);
    const [commented, setCommented] = useState(false)

/*função 'likado'*/ 
    
    const toggleLike = () => {
        setLiked(!liked);
    }
/*função 'comentado'*/
    
    const toggleComment = () => {
        setCommented(!commented);
    }
    
     
    
    const fetchData = async () => {
        setError(null);
        
            try {
                const response = await fetch(`http://localhost:3000/user/findAll/${page}`);
                const data = await response.json();
                console.log(data);
                
                if(data.length === 0){
                    console.log("Final da página");
                }
                else if (dataLength !== data.length) {
                    setDataLength(data.length);
                    setItems(prevItems => [...prevItems, ...data])
                }
                else if(dataLength === data.length){
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
    },[]);

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
                        <div id="profilePicture"><img src={profilePicture} width="60px" height="60px" alt={item.username} /></div>
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
                        <div><button 
/*Botão Like*/          className={`action-button like-button ${liked ? 'liked' : ''}`}             
                        id="like"><img src={Like} width="30px" height="30px" alt="Curtir"/></button></div>
                        <div>
                        <button 
/*Botão comentario*/    className={`action-button comment-button ${commented ? 'commented' : ''}`}
                        onclick = {toggleComment}
                        id="comment"><img src={Comment} width="30px" height="30px" alt="Comentar"/></button></div>
                    </div>
                </div>
            </React.Fragment>
            ))}
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    )
};

export default Feed;