import { FiInfo } from 'react-icons/fi';

import { useFormControl } from '../../hooks/useFormControl.ts';

type FormErrorTextHelperProps = {
  message: string;
};
export const FormErrorTextHelper = ({ message }: FormErrorTextHelperProps) => {
  const { isInvalid } = useFormControl();
  if (!isInvalid) {
    return null;
  }

  return (
    <div className="w-fit flex items-center space-x-2">
      <FiInfo className="size-4 shrink-0  stroke-red-500" />
      <span className="text-sm text-red-400">{message}</span>
    </div>
  );
};
