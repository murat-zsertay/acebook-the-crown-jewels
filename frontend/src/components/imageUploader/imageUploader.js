import React, { useState } from 'react';

const UploadPhotoForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
        const response = await fetch('/upload', {
          method: 'POST',
          body: formData
        });
      if (response.ok) {
        console.log('Photo uploaded')
      }
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