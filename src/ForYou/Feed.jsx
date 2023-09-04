import React, { useState, useEffect , useRef } from 'react';
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


    const fetchData = async () => {
        setError(null);
        
            try {
                const response = await fetch(`http://localhost:3000/user/findAll/${page}`);
                const data = await response.json();
                console.log(data);
                
                if(data.length === 0){
                    console.log("Final da página");
                }
                else if(data.length === 20){
                    console.log("Próxima página")
                    setDataLength(data.length);
                    setItems(prevItems => [...prevItems, ...data]);
                    setPage(prevPage => prevPage + 1);
                }
                else if (dataLength != data.length) {
                    setDataLength(data.length);
                    setItems(prevItems => [...prevItems, ...data])
                }
                else if(dataLength == data.length){
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
                    <div className="Post-Top">
                        <div classname="Item" id="profilePicture"><img src={profilePicture} width="60px" height="60px"/></div>
                        <div className="Item">{item.username}</div>
                    </div>
                    <div className="Item">{item.status}</div>
                    <div className="Item">{item.firstName}</div>
                    <div className="Item">{item.lastName}</div>
                    <div className="Item">{item.email}</div>
                    <div className="Item">{item.description}</div>
                    <div className="Item">{item.birthDate}</div>
                    <div className="Item">{item.state}</div>
                    <div className="Post-Footer"><img src={Like} width="30px" height="30px"/></div>
                    <div className="Post-Footer"><img src={Comment} width="30px" height="30px"/></div>
                </div>
            </React.Fragment>
            ))}
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    )
};

export default Feed;