import { ChangeEvent } from 'react';

type InputProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
};

export const Input = (props: InputProps) => {
  const { placeholder, value, onChange, isInvalid } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <input
        className={`w-full h-10 px-4 py-2 rounded-md ${isInvalid ? 'border-2 border-red-400 focus:outline-none ' : 'border-2 border-slate-500 focus:outline-purple-500'}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
