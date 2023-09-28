 //Troca a visibilidade da barra de comentário
export const toggleComment = (postId) => {
    setItems((prevItems) =>
        prevItems.map((item) =>
            item.id_post === postId
                ? { ...item, commentVisible: !item.commentVisible }
                : item
        )
    );
};

 // "Mandar o comentário para o banco" --> Nunca vai acontecer 
export const addComment = async (userId, postId, newCommentText) => {
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