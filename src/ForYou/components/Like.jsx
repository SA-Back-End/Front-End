// define o post como 'likado' ou não

export default toggleLike = (id_post) => {
    setLiked((prevLiked) => ({
        ...prevLiked,
        [id_post]: !prevLiked[id_post],
    }));
};