import styled from 'styled-components';

export const CharacterDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Detail = styled.div`
  width: 250px;
  line-height: 1.6em;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: flex-start;
  align-items: center;
  
  & > strong {
    width: 100px;
    font-family: 'GoT';
  }
`;