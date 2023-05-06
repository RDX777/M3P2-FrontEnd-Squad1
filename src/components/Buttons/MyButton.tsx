import { StyledMyButton } from './StyledMyButton';

type MyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const MyButton = ({ children, ...props }: MyButtonProps) => {
  return <StyledMyButton {...props}>{children}</StyledMyButton>;
};
