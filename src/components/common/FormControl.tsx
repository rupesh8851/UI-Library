import { ReactNode } from 'react';

import { FormContext } from '../../context/FormContext.ts';

type FormControlProps = {
  children: ReactNode;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
};

export const FormControl = (props: FormControlProps) => {
  const { isInvalid, isDisabled, isReadOnly, isRequired, children } = props;
  return (
    <FormContext.Provider
      value={{ isRequired, isDisabled, isInvalid, isReadOnly }}
    >
      <div className="w-full py-0.5 px-2 flex flex-col justify-start items-start space-y-1">
        {children}
      </div>
    </FormContext.Provider>
  );
};
