import { useEffect, useRef, useState } from 'react';

export const useDebounceCallback = ({
  cb,
  time = 300,
}: {
  cb: () => void;
  time?: number;
}) => {
  const ref = useRef<NodeJS.Timeout>();

  const debounce = () => {
    if (ref.current) clearTimeout(ref.current);

    ref.current = setTimeout(() => {
      cb();
    }, time);
  };

  return { debounce };
};

export const useDebounceValue = <T>(value: T, time: number) => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timerRef = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timerRef);
    };
  }, [value, time]);

  return debounceValue;
};
