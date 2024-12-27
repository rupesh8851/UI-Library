import { ReactNode } from 'react';

type FormLabelProps = {
  label: string;
  rightIcon?: ReactNode;
};
export const FormLabel = (props: FormLabelProps) => {
  const { label, rightIcon } = props;

  return (
    <div className="flex items-center space-x-2">
      <label className="text-md text-slate-500">{label}</label>
      {rightIcon}
    </div>
  );
};
