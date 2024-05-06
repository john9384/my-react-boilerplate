import React from 'react';
import { useLocation } from 'react-router-dom';

export const useAppStorageCleanUp = () => {
  const location = useLocation();

  React.useEffect(() => {
    // eslint-disable-next-line
  }, [location]);
};
