import { ChangeEvent } from 'react';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  type?: string;
};

export const Input = (props: InputProps) => {
  const { placeholder, value, onChange, isInvalid, type = 'text' } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <input
        className={`w-full h-10 px-4 py-2 rounded-md shadow-sm ${isInvalid ? 'border-2 border-red-400 focus:outline-none ' : 'border-2 border-slate-200 focus:outline-offset-2 focus:outline-purple-500'}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
