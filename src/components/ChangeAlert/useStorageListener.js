import { useState } from 'react';

const useStorageListener = (synchronize) => {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V1') {
      console.log('Changes in TODOS_V1');
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    synchronize();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow,
  };
};

export { useStorageListener };
