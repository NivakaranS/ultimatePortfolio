// ScrollContext.js
import React, { createContext, useContext, useRef, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [refs, setRefs] = useState({});

  const registerRef = (name, ref) => {
    setRefs(prevRefs => ({ ...prevRefs, [name]: ref }));
  };

  return (
    <ScrollContext.Provider value={{ refs, registerRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);