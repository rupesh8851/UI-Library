import { ReactNode } from 'react';

import { RxCross2 } from 'react-icons/rx';

type FormWrapperProps = {
  footer: {
    slotStart?: ReactNode;
    slotEnd?: ReactNode;
  };
  content: ReactNode;
  header?: {
    onClose: () => void;
    headerText: string;
  };
};

export const FormWrapper = (props: FormWrapperProps) => {
  const { footer, content, header } = props;
  return (
    <div className="relative pb-16 w-full flex flex-col justify-center items-center">
      {header && (
        <div className="py-4 px-4  mb-4 flex justify-start items-center w-full bg-purple-200">
          <div className="text-md font-semibold text-slate-600">
            {header.headerText}
          </div>
          <RxCross2
            className="absolute top-2 right-2 size-4 shrink-0 cursor-pointer fill-slate-300 stroke-purple-50"
            onClick={header?.onClose}
          />
        </div>
      )}

      <div className="w-full block min-h-48 overflow-y-scroll">{content}</div>
      <footer className="absolute bottom-0 w-full py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">{footer.slotStart}</div>
        <div className="flex items-center">{footer.slotEnd}</div>
      </footer>
    </div>
  );
};
