import React, { useEffect, useState } from 'react';
import SnippetCard from '../components/SnippetCard';
import './Snippets.css';

function Snippets() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('snippets')) || [];
    setSnippets(stored);
  }, []);

  return (
    <div className="snippets-page">
      <h2>Your Snippets</h2>
      <div className="snippet-grid">
        {snippets.length > 0 ? (
          snippets.map((s) => (
            <SnippetCard
              key={s.id}
              title={s.title}
              language={s.language}
              description={s.topic}
              code={s.code}
            />
          ))
        ) : (
          <p>No snippets found.</p>
        )}
      </div>
    </div>
  );
}

export default Snippets;
