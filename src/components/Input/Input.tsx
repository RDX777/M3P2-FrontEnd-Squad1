import { StyledInput } from './StyledInput';
import { forwardRef } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

type InputProps = {
  register?: UseFormRegister<FieldValues>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});

Input.displayName = 'Input';
