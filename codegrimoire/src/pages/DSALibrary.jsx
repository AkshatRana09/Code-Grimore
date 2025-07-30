import React from 'react';
import dsaSnippets from '../data/dsaSnippets';

const DSALibrary = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📘 DSA Code Grimoire</h1>
      {dsaSnippets.map(snippet => (
        <div key={snippet.id} className="mb-4 p-4 border rounded bg-gray-100 dark:bg-gray-800">
          <h2 className="text-xl font-semibold">{snippet.topic} ({snippet.language})</h2>
          <pre className="mt-2 bg-black text-green-400 p-3 rounded overflow-auto text-sm">
            <code>{snippet.code}</code>
          </pre>
        </div>
      ))}
    </div>
  );
};

export default DSALibrary;
