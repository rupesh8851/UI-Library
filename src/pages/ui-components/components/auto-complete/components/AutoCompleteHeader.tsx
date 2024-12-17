// @flow

export const AutoCompleteHeader = ({
  title,
  value,
}: {
  title: string;
  value?: string;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <span> {title} </span>
      {value && <span className="text-slate-900 font-semibold">{value}</span>}
    </div>
  );
};
