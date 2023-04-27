import React from 'react';
import { MyButton } from './styles';

interface Props {
  onClick: () => void,
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ onClick, children }) =>
  <MyButton
    onClick={onClick}
  >
    {children}
  </MyButton>;

export default Button;