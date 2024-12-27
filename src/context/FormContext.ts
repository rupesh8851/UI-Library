import { createContext } from 'react';

interface FormControlContextProps {
  isInvalid?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
}

export const FormContext = createContext<FormControlContextProps | undefined>(
  undefined,
);
