import { useState } from "react";
import { createContext } from "react";

export const MarkdownContext = createContext(null);

const MarkdownProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState("");

  return (
    <MarkdownContext.Provider value={[markdown, setMarkdown]}>
      {children}
    </MarkdownContext.Provider>
  );
};


export default MarkdownProvider;
