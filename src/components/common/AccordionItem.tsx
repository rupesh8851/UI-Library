import { FC } from 'react';

import { FiChevronUp } from 'react-icons/fi';

interface AccordionItemProps {
  title: string;
  description: string;
  active: boolean;
  handleOnClick: () => void;
}

export const AccordionItem: FC<AccordionItemProps> = (props) => {
  const { title, description, active, handleOnClick } = props;

  return (
    <div className="shadow-md rounded-md">
      <div
        tabIndex={0}
        role="button"
        className="flex items-center justify-between py-2 px-4"
        onClick={handleOnClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleOnClick();
          }
        }}
      >
        <span className="text-gray-500 font-semibold">{title}</span>
        <FiChevronUp
          className={`size-4 shrink-0 transition-all ease-in ${active ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      <div
        className={`px-2 text-sm text-gray-500 overflow-hidden bg-slate-100 transition-all  ease-in ${active ? 'h-24 py-2' : 'h-0'}`}
      >
        {description}
      </div>
    </div>
  );
};
