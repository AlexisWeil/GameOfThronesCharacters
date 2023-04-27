import { Route, Routes, useMatch } from 'react-router-dom';
import CharactersList from '../../pages/CharactersList';
import Home from '../../pages/Home';
import CharacterDetails from '../../pages/CharacterDetails';
import { Character } from '../../models/Character';
import { useEffect } from 'react';
import { LeftMenu, LeftMenuItem, LeftMenuLogo, TemplateContent, TemplateWrapper } from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { addNewCharacter, fetchCharacters } from '../../redux/charactersReducer';

const Logo = require('./assets/logo.png');

const Template = () => {
  const dispatch = useAppDispatch();
  const { characters } = useAppSelector((state) => state.characters)

  useEffect(() => {
    if (characters.length === 0)
      dispatch(fetchCharacters());
  }, []);

  return (
    <TemplateWrapper>
      <LeftMenu>
        <LeftMenuLogo
          alt="Logo Game of Thrones"
          src={Logo}
        />

        <LeftMenuItem
          to="/"
          active={!!useMatch('/')}
        >
          Home
        </LeftMenuItem>

        <LeftMenuItem
          to="/characters"
          active={!!useMatch('/characters')}
        >
          Characters list
        </LeftMenuItem>
      </LeftMenu>

      <TemplateContent>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<CharactersList />}/>
          <Route path="/character/:id" element={<CharacterDetails />}/>
        </Routes>
      </TemplateContent>
    </TemplateWrapper>
  );
};


export default Template;