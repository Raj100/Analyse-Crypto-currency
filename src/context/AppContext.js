"use client";

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [searchContent, setSearchContent] = useState('');


  return (
    <AppContext.Provider value={{ searchContent, setSearchContent }}>
      {children}
    </AppContext.Provider>
  );
};
