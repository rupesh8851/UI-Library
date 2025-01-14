import { ReactNode } from 'react';

import { RxCross2 } from 'react-icons/rx';

type FormWrapperProps = {
  footer: {
    slotStart?: ReactNode;
    slotEnd?: ReactNode;
  };
  content: ReactNode;
  headerText?: string;
  onClose: () => void;
  width?: string;
};

export const FormWrapper = (props: FormWrapperProps) => {
  const { footer, content, headerText, onClose, width = 'w-2/5' } = props;
  return (
    <div className="fixed inset-0">
      <div
        aria-describedby="Overlay"
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div
        className={`relative z-10 left-2/3 top-1/2 ${width} -translate-x-2/3 -translate-y-1/2 bg-white shadow-2xl rounded-md overflow-hidden`}
      >
        <div className="relative pb-16 w-full flex flex-col justify-center items-center">
          {headerText && (
            <div className="py-4 px-4  mb-4 flex justify-start items-center w-full bg-purple-200">
              <div className="text-md font-semibold text-slate-600">
                {headerText}
              </div>
              <RxCross2
                className="absolute top-2 right-2 size-4 shrink-0 cursor-pointer fill-slate-300 stroke-purple-50"
                onClick={onClose}
              />
            </div>
          )}

          <div className="w-full block min-h-48 overflow-y-scroll">
            {content}
          </div>
          <footer className="absolute bottom-0 w-full py-4 px-4 flex justify-between items-center">
            <div className="flex items-center">{footer.slotStart}</div>
            <div className="flex items-center">{footer.slotEnd}</div>
          </footer>
        </div>
      </div>
    </div>
  );
};
