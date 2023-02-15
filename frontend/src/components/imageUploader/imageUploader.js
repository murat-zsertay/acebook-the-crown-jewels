import React, { useState } from 'react';

const UploadPhotoForm = (token) => {
  // State setting
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      // Send new formData with image to the app.js backend
      const uploadResponse = await fetch('/upload', {
        method: 'POST',
        body: formData
      });
      setSelectedFile(null);
      const cleanUploadResponse = await uploadResponse.json()
      setImageUrl(cleanUploadResponse.imageUrl)

      // Send off the returned image Url to users/image,
      // users route currently does not have token checker which we may need for
      // certain parts like setting in user 
      const userImageResponse = await fetch('/users/image', {
        method:'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: {
          'imageURL': `${imageUrl}`
        }
      });
      const cleanUserImageResponse = await userImageResponse.json();
      window.localStorage.setItem("token", cleanUserImageResponse.token)
      setImageUrl(null);
    }
  }
      

  return (
        <form onSubmit={handleSubmit} data-cy="imageForm">
          <label for='photoInput'>Select a photo:</label>
          <input id='photoInput' type="file" onChange={handleFileSelect} />
          <button type="submit">Upload photo</button>
        </form>
      );
    }

    export default UploadPhotoForm;