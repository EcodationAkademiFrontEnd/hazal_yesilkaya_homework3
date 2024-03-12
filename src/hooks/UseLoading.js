import { useState } from 'react';

export const UseLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  return {
    isLoading,
    setIsLoading,
  };
};

export default UseLoading;
