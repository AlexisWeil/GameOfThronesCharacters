import React from 'react';
import { TitleWrapper } from './styles';

interface Props {
  size?: 'small' | 'large'
  children: React.ReactNode
}

const Title: React.FC<Props> = ({ size, children }: Props) =>
  <TitleWrapper size={size || 'large'}>
    {children}
  </TitleWrapper>;

export default Title;