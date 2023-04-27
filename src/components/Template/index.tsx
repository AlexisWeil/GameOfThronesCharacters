import { Link, Route, Routes, useMatch } from 'react-router-dom';
import CharactersList from '../../pages/CharactersList';
import Home from '../../pages/Home';
import CharacterDetails from '../../pages/CharacterDetails';
import { Character, CharacterAPI, parseCharacterAPI } from '../../models/Character';
import { useEffect, useState } from 'react';
import { LeftMenu, LeftMenuItem, LeftMenuLogo, TemplateContent, TemplateWrapper } from './styles';
import axios from 'axios';

const Logo = require('./assets/logo.png');

const Template = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<CharacterAPI[]>('https://thronesapi.com/api/v2/Characters')
      .then((res) => {
        setCharacters(res.data.map(parseCharacterAPI));
        setLoading(false);
      });
  }, []);

  const onAddCharacter = (character: Character) => {
    const newCharacters = characters.concat(character);

    setCharacters(newCharacters);
  };

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
          <Route path="/characters" element={<CharactersList loading={loading} characters={characters} onAddCharacter={onAddCharacter} />}/>
          <Route path="/character/:id" element={<CharacterDetails loading={loading} characters={characters} />}/>
        </Routes>
      </TemplateContent>
    </TemplateWrapper>
  );
};


export default Template;