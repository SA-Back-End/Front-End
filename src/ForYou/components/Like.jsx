// define o post como 'likado' ou não

export const toggleLike = (id_post, setLiked) => {
    setLiked((prevLiked) => ({
        ...prevLiked,
        [id_post]: !prevLiked[id_post],
    }));
};