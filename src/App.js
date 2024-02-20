import React, { useState } from 'react';
import './App.css'; // Arquivo CSS para estilização

function App() {
  const [image, setImage] = useState('');

  const convert2base64 = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result.toString());
      
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="app">
      <h1>Upload de Imagem</h1>
      {image ? (
        <img src={image} alt="Imagem Carregada" />
      ) : (
        <div>
          <input id="fileupload" className="hidden" type="file" onChange={e => convert2base64(e)} />
          <label htmlFor="fileupload">Upload de Imagem</label>
        </div>
      )}
    </div>
  );
}

export default App;
