import styled from 'styled-components';

export const CharactersListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CharactersListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const CharacterItemName = styled.span`
  font-family: 'GoT';
  margin-left: 10px;
`;

export const CharacterDeleteIcon = styled.span`
  font-size: 1.5em;
  margin-right: 10px;
`;