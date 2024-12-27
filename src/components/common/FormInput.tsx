import { Input } from './Input.tsx';
import { useFormControl } from '../../hooks/useFormControl.ts';

type FormInputProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
};
export const FormInput = (props: FormInputProps) => {
  const { isInvalid } = useFormControl();

  return <Input {...props} isInvalid={isInvalid} />;
};
