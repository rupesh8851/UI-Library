export type Option = {
  label: string;
  value: string;
};

export type AutoCompleteProps = {
  options: Option[];
  onSelect: (option: Option) => void;
  placeholder?: string;
};
