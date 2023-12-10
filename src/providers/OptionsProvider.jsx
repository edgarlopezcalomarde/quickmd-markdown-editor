import { createContext, useState } from "react";

export const OptionsContext = createContext(null);

export const OptionsProvider = ({ children }) => {
  const [options, setOptions] = useState({
    editor: true,
    fullscreen: false,
  });
  
  return (
    <OptionsContext.Provider value={[options, setOptions]}>
      {children}
    </OptionsContext.Provider>
  );
};
