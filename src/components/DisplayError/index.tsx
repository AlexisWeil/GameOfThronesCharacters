import React from 'react';
import { DisplayErrorWrapper } from './styles';


interface Props {
  children: React.ReactNode
}

const DisplayError: React.FC<Props> = ({ children }) =>
  <DisplayErrorWrapper>{children}</DisplayErrorWrapper>;

export default DisplayError;