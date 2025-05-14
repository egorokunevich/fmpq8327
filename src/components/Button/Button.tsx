import { PropsWithChildren } from 'react';
import { ButtonSC } from './styles';

interface IButtonProps extends PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: IButtonProps) => {
  return <ButtonSC {...props}>{children}</ButtonSC>;
};

export default Button;
