import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const InputWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  & > input {
    font-size: 1.2em;
    padding: 5px;
    border: 1px solid ${colors.darkGray};
    border-radius: 2px;
    
    &:focus {
      border-color: ${colors.darkGray};
    }
  }
`;

export const InputLabel = styled.label`
  width: 150px;
  font-family: 'GoT';
`;