// src/pages/AllSnippets.jsx
import React from "react";
import { useSnippets } from "../context/SnippetContext";

const AllSnippets = () => {
  const { snippets, setSnippets } = useSnippets();

  const handleDelete = (indexToDelete) => {
    const updated = snippets.filter((_, i) => i !== indexToDelete);
    setSnippets(updated);
    localStorage.setItem("snippets", JSON.stringify(updated));
  };

  return (
    <div className="all-snippets-page">
      <h2>All Snippets</h2>
      {snippets.length === 0 ? (
        <p>No snippets found.</p>
      ) : (
        snippets.map((snippet, index) => (
          <div key={index} className="snippet-card">
            <h3>{snippet.language}</h3>
            <p>{snippet.topic}</p>
            <pre>{snippet.code}</pre>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default AllSnippets;
