import { useEffect, useState } from 'react';

const useLocalStorage = (itemName, initialValue) => {
  const [synchronizedItem, setSynchronizedItem] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSynchronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, [synchronizedItem]);

  const saveItem = (newItem) => {
    try {
      const item = JSON.stringify(newItem);
      localStorage.setItem(itemName, item);

      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const synchronizeItem = () => {
    setLoading(true);
    setSynchronizedItem(false);
  };

  return { item, saveItem, loading, error, synchronizeItem };
};

export { useLocalStorage };
