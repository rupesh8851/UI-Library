import { useContext } from 'react';

import { FormContext } from '../context/FormContext.ts';

export const useFormControl = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error('useFormControl must be used within the context');
  return context;
};
