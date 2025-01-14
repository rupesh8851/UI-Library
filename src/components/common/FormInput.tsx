import { Input } from './Input.tsx';
import { useFormControl } from '../../hooks/useFormControl.ts';

type FormInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
};
export const FormInput = (props: FormInputProps) => {
  const { isInvalid } = useFormControl();

  return <Input {...props} isInvalid={isInvalid} />;
};
