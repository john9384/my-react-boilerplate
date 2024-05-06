import React from 'react';

const LayoutContext = React.createContext<Record<string, any>>({});

export const LayoutContextProvider = ({ children, value }) => {
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export const useOddColumnLayout = () => React.useContext(LayoutContext);

export const useEvenColumnLayout = () => React.useContext(LayoutContext);
