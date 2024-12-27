// @flow

import { ReactNode } from 'react';

type FormWrapperProps = {
  footer: {
    slotStart?: ReactNode;
    slotEnd?: ReactNode;
  };
  content: ReactNode;
};

export const FormWrapper = (props: FormWrapperProps) => {
  const { footer, content } = props;
  return (
    <div className="relative pb-16 w-full flex flex-col justify-center items-center ">
      <div className="w-full block min-h-48 overflow-y-scroll">{content}</div>
      <footer className="absolute bottom-0 w-full flex justify-between items-center">
        <div className="flex items-center">{footer.slotStart}</div>
        <div className="flex items-center">{footer.slotEnd}</div>
      </footer>
    </div>
  );
};
