import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const MyButton = styled.button`
  min-width: 150px;
  line-height: 3em;
  color: white;
  font-family: 'GoT';
  background-color: ${colors.darkGray};
  border: none;
  border-radius: 4px;
  padding: 0 20px;
  margin: 10px 0;
  align-self: center;
  cursor: pointer;
  
  &:hover {
    background: black;
  }
`;