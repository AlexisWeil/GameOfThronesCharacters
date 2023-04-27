import React from 'react';
import { CharacterImageWrapper } from './styles';

interface Props {
  url: string,
  name: string,
  size?: 'small' | 'large'
}

const CharacterImage: React.FC<Props> = ({ url, name, size }: Props) =>
  <CharacterImageWrapper
    alt={name}
    src={url}
    size={size || 'small'}
  />;

export default CharacterImage;