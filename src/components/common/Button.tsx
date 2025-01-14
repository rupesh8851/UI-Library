import { FC } from 'react';

type ButtonProps = {
  onClick?: () => void;
  label: string;
};

export const Button: FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      className="py-1 px-2 bg-purple-500 shadow-xl text-md text-white rounded-md  hover:scale-105 active:ring-2 active:ring-offset-1 active:ring-purple-500"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
