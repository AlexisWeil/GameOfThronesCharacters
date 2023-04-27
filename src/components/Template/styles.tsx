import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../utils/colors';

export const TemplateWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const LeftMenu = styled.aside`
  width: auto;
  min-width: 300px;
  height: 100%;
  border-right: 2px solid ${colors.lightGray};
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const LeftMenuLogo = styled.img`
  width: 100%;
  max-width: 150px;
  align-self: center;
`;

interface LeftMenuItemProps {
  active: boolean
}

export const LeftMenuItem = styled(Link)<LeftMenuItemProps>`
  line-height: 1.6em;
  font-family: 'GoT';
  letter-spacing: 0.07em;
  word-spacing: 0.3em;
  color: ${colors.darkGray};
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    font-weight: bold;
  }

  ${(props) => props.active && `
    color: ${colors.gold};
  `};
`;

export const TemplateContent = styled.article`
  height: 100%;
  padding: 50px;
  overflow: auto;
  box-sizing: border-box;
  flex: 1;
`;

export const LangSwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

interface LangSwitchProps {
  selected: boolean
}

export const LangSwitch = styled.img<LangSwitchProps>`
  width: 25px;
  margin-left: 7px;
  cursor: pointer;
  border: 3px solid ${(props) => props.selected ? colors.gold : 'white'};
  border-radius: 50%;
`;