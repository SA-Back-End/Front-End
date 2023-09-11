
export default function Picture() {
    const handleSavePicture = async () => {
        try {
            const formData = new FormData();
            formData.append('profileImage', profileImage);
            
            const response = await fetch('URL_DA_SUA_API', {
                method: 'POST',
                body: formData,
            });
    
            if (response.ok) {
                console.log('Imagem salva!');
            } else {
                console.error('Falha ao salvar a imagem.');
            }
        } catch (error) {
            console.error('Erro ao salvar a imagem:', error);
        }
    };
    return(
        <div>
            <img src="" alt="Foto de Perfil"/>
        </div>
    )
}