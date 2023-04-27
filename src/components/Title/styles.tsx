import styled from 'styled-components';

interface TitleWrapperProps {
  size: 'small' | 'large'
}

export const TitleWrapper = styled.h1<TitleWrapperProps>`
  line-height: 1.6em;
  font-family: 'GoT';
  font-size: ${(props) => props.size === 'small' ? '1.6em' : '3em'};
  font-weight: normal;
  letter-spacing: 0.1em;
  word-spacing: 0.3em;
`;