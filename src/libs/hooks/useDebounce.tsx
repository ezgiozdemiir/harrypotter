import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handlerId = setTimeout(() => {
      setDebouncedValue(value);

      return () => {
        clearTimeout(handlerId);
      };
    }, delay);
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;
