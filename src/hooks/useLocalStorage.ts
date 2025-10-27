import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Initialize state with localStorage value if exists, else fallback
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("❌ Error reading from localStorage:", error);
      return initialValue;
    }
  });

  // Persist changes to localStorage whenever storedValue updates
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("❌ Error writing to localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
