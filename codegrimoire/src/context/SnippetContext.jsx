import React, { createContext, useContext, useState } from "react";

const SnippetContext = createContext({
  snippets: [],
  setSnippets: () => {},
});

export const SnippetProvider = ({ children }) => {
  const [snippets, setSnippets] = useState([]);

  return (
    <SnippetContext.Provider value={{ snippets, setSnippets }}>
      {children}
    </SnippetContext.Provider>
  );
};

export const useSnippets = () => useContext(SnippetContext);
