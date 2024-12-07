// @flow

import { useEffect, useRef, useState } from 'react';

import { FaCheckCircle } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

import { AlertProps } from '../types/types.ts';

interface AlertItemProps extends AlertProps {
  close: (id: string) => void;
}

export const AlertItem = (props: AlertItemProps) => {
  const { id, title, description, close } = props;
  const [isMounted, setIsMounted] = useState(false);
  const [width, setWidth] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | number>();

  const onClose = () => {
    setIsMounted(false);
    clearInterval(intervalRef.current);
    close(id);
  };

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 100);
    intervalRef.current = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth >= 100) {
          onClose();
        }
        return prevWidth + 1;
      });
    }, 100);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [id, close]);

  return (
    <div
      className={`block relative  w-80 flex-col bg-white rounded-md shadow-2xl overflow-hidden transition-all duration-500 ease-out ${isMounted ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => close(id)}
      >
        <RxCross2 className="shrink-0 size-4" />
      </div>
      <div className="flex items-center h-full w-full p-2">
        <div className="flex items-center justify-center w-1/6 h-full ">
          <FaCheckCircle className="shrink-0 size-6" />
        </div>
        <div className="block w-5/6 h-full">
          <div className="text-md text-slate-500 font-semibold">{title}</div>
          <div className="text-sm text-slate-500">{description}</div>
        </div>
      </div>

      <div className="flex w-full h-1 bg-slate-100 ">
        <span
          className={`flex bg-green-500 transition-all duration-500`}
          style={{ width: width + '%' }}
        />
      </div>
    </div>
  );
};
