import React, { useState } from 'react';

 function ProfileEditor() {
    const [profileImage, setProfileImage] = useState('https://static.vecteezy.com/ti/vetor-gratis/p1/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg');

    const handleImageChange = (event) => {
        const newImage = event.target.files[0];
        const imageURL = URL.createObjectURL(newImage);
        setProfileImage(imageURL);

        if (profileImage) {
            URL.revokeObjectURL(profileImage);
        }
    };

    const handleEditImageClick = () => {
        const inputElement = document.createElement('input');
        inputElement.type = 'file';
        inputElement.addEventListener('change', handleImageChange);
        inputElement.click();
    };
    return (
        <div>
            <img src={profileImage} alt="Perfil" />
            <button onClick={handleEditImageClick}>Alterar Foto</button>
        </div>
    );
}

export default ProfileEditor;
