import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(({ children, ...props }, ref) => {
  return <button {...props}>{children}</button>;
});

export default Button;
