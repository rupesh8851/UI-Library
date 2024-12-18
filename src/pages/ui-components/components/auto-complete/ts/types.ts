export type Option = {
  label: string;
  value: string;
};

export type AutoCompleteProps = {
  options: Option[];
  placeholder?: string;
};
