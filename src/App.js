import { useState } from 'react';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = async () => {
    const formData = new FormData();
    formData.append('photo', selectedFile);

    const response = await fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    alert(data.message);
  };

  return (
    <div className="App">
      <h1>Photo Sharing Web App</h1>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
    </div>
  );
}

export default App;
