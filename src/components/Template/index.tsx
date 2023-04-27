import { Route, Routes, useMatch } from 'react-router-dom';
import CharactersList from '../../pages/CharactersList';
import Home from '../../pages/Home';
import CharacterDetails from '../../pages/CharacterDetails';
import { Character } from '../../models/Character';
import { useEffect } from 'react';
import {
  LangSwitch,
  LangSwitchWrapper,
  LeftMenu,
  LeftMenuItem,
  LeftMenuLogo,
  TemplateContent,
  TemplateWrapper
} from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { addNewCharacter, fetchCharacters } from '../../redux/charactersReducer';
import { useTranslation } from 'react-i18next';

const Logo = require('./assets/logo.png');
const FrFlag = require('./assets/fr.png');
const EnFlag = require('./assets/en.png');

const Template = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const { characters } = useAppSelector((state) => state.characters)

  useEffect(() => {
    if (characters.length === 0)
      dispatch(fetchCharacters());
  }, []);

  return (
    <TemplateWrapper>
      <LeftMenu>
        <LangSwitchWrapper>
          <LangSwitch
            onClick={() => i18n.changeLanguage('fr')}
            alt="Switch to French"
            src={FrFlag}
            selected={i18n.language === 'fr'}
          />
          <LangSwitch
            onClick={() => i18n.changeLanguage('en')}
            alt="Switch to English"
            src={EnFlag}
            selected={i18n.language === 'en'}
          />
        </LangSwitchWrapper>

        <LeftMenuLogo
          alt="Logo Game of Thrones"
          src={Logo}
        />

        <LeftMenuItem
          to="/"
          active={!!useMatch('/')}
        >
          {t('home.menu-item')}
        </LeftMenuItem>

        <LeftMenuItem
          to="/characters"
          active={!!useMatch('/characters')}
        >
          {t('characters.menu-item')}
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