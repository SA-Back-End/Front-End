import React, { useState, useEffect , useRef } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

const Feed = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:8000/user/findAll/${page}`);
            const data = await response.json();

            setItems(prevItems => [...prevItems, ...data]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <InfiniteScroll 
                dataLength = {items.length}
                next = {fetchData}
                hasMore = {true} 
                loader = {<p>Carregando...</p>}
                endMessage = {<p>Sem conteúdo para carregar.</p>}
            >
                <ul>
                    {items.map(item => (
                      <li key = {item.id}>{item.name}</li>  
                      ))}
                </ul>
            </InfiniteScroll>
            {error && <p>Erro: {error.message}</p>}
        </div>
    )
};

export default Feed;