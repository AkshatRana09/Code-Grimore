import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { SnippetProvider } from './context/SnippetContext'; // ✅ Import it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnippetProvider> {/* ✅ Wrap here */}
        <App />
      </SnippetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
