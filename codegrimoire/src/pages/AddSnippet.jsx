import React, { useState, useEffect } from 'react';
import './AddSnippet.css';
import { useSnippets } from '../context/SnippetContext';

function AddSnippet() {
  const { snippets, setSnippets } = useSnippets();

  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [topic, setTopic] = useState('');
  const [code, setCode] = useState('');

  // Load snippets from localStorage once on mount (sync context if needed)
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('snippets')) || [];
    if (stored.length > 0 && snippets.length === 0) {
      setSnippets(stored);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSnippet = {
      id: Date.now(),
      title,
      language,
      topic,
      code,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedSnippets = [newSnippet, ...snippets];

    // Update localStorage and context
    localStorage.setItem('snippets', JSON.stringify(updatedSnippets));
    setSnippets(updatedSnippets);

    // Reset form
    setTitle('');
    setLanguage('');
    setTopic('');
    setCode('');
    alert('Snippet added successfully!');
  };

  return (
    <div className="add-snippet-container">
      <h2>Add New Snippet</h2>
      <form className="snippet-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Language (e.g., JavaScript)"
          value={language}
          required
          onChange={(e) => setLanguage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Topic (optional)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <textarea
          placeholder="Enter your code here..."
          value={code}
          required
          onChange={(e) => setCode(e.target.value)}
          rows={10}
        />
        <button type="submit">Add Snippet</button>
      </form>
    </div>
  );
}

export default AddSnippet;
