import React from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="App">
      <h1>Photo Sharing App</h1>
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
