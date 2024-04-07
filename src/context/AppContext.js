"use client";

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [searchContent, setSearchContent] = useState('');
  const [Delete, setDelete] = useState(false);


  return (
    <AppContext.Provider value={{ searchContent, setSearchContent,Delete ,setDelete}}>
      {children}
    </AppContext.Provider>
  );
};
