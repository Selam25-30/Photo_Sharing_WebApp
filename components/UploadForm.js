import React, { useState } from 'react';
import { storage, firestore, timestamp } from '../firebase';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const allowedTypes = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const storageRef = storage.ref(file.name);
    const collectionRef = firestore.collection('images');

    try {
      const response = await storageRef.put(file);
      const url = await response.ref.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt });
      setFile(null);
    } catch (error) {
      setError('Error uploading file');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default UploadForm;
