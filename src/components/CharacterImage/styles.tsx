import styled from 'styled-components';

interface CharacterImageWrapperProps {
  size: 'small' | 'large'
}

export const CharacterImageWrapper = styled.img<CharacterImageWrapperProps>`
  width: ${(props) => props.size === 'small' ? '100px' : '200px;'};
  height: ${(props) => props.size === 'small' ? '100px' : '200px;'};
  object-fit: cover;
  border-radius: 50%;
`;