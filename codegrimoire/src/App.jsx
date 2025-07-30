import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Snippets from './pages/Snippets';
import AddSnippet from './pages/AddSnippet';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import AllSnippets from './pages/AllSnippets';
import { useSnippets } from './context/SnippetContext';
import DsaGrimoire from "./pages/DsaGrimoire";
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';

function App() {
  const location = useLocation();
  const { setSnippets } = useSnippets();

  useEffect(() => {
    const storedSnippets = JSON.parse(localStorage.getItem("snippets")) || [];
    setSnippets(storedSnippets);
  }, [setSnippets]);

  return (
    <div className="app-container">
      <Navbar />
      <div className="page-content">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/all-snippets" element={<AllSnippets />} />
          <Route path="/snippets" element={<Snippets />} />
          <Route path="/add" element={<AddSnippet />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dsa-library" element={<DsaGrimoire />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
