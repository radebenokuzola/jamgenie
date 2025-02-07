import React, { useState } from 'react';
import axios from 'axios';
import Analytics from './Analytics';
import './App.css';

function App() {
  const [topic, setTopic] = useState('');
  const [audience, setAudience] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [generatedContent, setGeneratedContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/generate', {
        topic,
        audience,
        platform
      });
      setGeneratedContent(response.data.content);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <div className="App">
      <h1>JamGenie Content Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <input
          type="text"
          placeholder="Audience"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
        />
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option>Instagram</option>
          <option>TikTok</option>
          <option>LinkedIn</option>
        </select>
        <button type="submit">Generate</button>
      </form>
      {generatedContent && (
        <div className="output">
          <h2>Generated Content:</h2>
          <p>{generatedContent}</p>
        </div>
      )}
      <Analytics />
    </div>
  );
}

export default App
