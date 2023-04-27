import { Character } from '../../models/Character';
import { useState } from 'react';
import AddCharacterForm from './components/AddCharacterForm';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title';
import { CharacterItemName, CharactersListItem, CharactersListWrapper } from './styles';
import CharacterImage from '../../components/CharacterImage';
import Loader from '../../components/Loader';



interface Props {
  characters: Character[],
  onAddCharacter: (character: Character) => void,
  loading: boolean
}

const CharactersList: React.FC<Props> = ({ characters, onAddCharacter, loading }) => {
  const navigate = useNavigate();

  return (
    <>
      <AddCharacterForm
        nextId={characters.length}
        onAddCharacter={onAddCharacter}
      />

      <Title size="small">Characters list</Title>

      {loading ?
        <Loader /> :
        <CharactersListWrapper>
          {characters.map((c: Character) =>
            <CharactersListItem
              onClick={() => navigate('/character/' + c.id)}
            >
              <CharacterImage
                name={c.name}
                url={c.imageUrl}
              />

              <CharacterItemName>{c.name}</CharacterItemName>
            </CharactersListItem>
          )}
        </CharactersListWrapper>
      }
    </>
  );
};

export default CharactersList;