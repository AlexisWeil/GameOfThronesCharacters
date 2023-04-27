import { Character } from '../../models/Character';
import { useState } from 'react';
import AddCharacterForm from './components/AddCharacterForm';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title';
import { CharacterDeleteIcon, CharacterItemName, CharactersListItem, CharactersListWrapper } from './styles';
import CharacterImage from '../../components/CharacterImage';
import Loader from '../../components/Loader';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { addNewCharacter, deleteCharacter } from '../../redux/charactersReducer';
import DisplayError from '../../components/DisplayError';
import { AiFillDelete } from 'react-icons/ai';

const CharactersList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { characters, isFetchingCharacters, fetchingError } = useAppSelector((state) => state.characters);

  const onAddCharacter = (character: Character) => {
    dispatch(addNewCharacter(character));
  };

  return (
    <>
      <AddCharacterForm
        nextId={characters.length}
        onAddCharacter={onAddCharacter}
      />

      <Title size="small">Characters list</Title>

      {isFetchingCharacters ?
        <Loader /> :
        <CharactersListWrapper>
          {fetchingError && <DisplayError>{fetchingError}</DisplayError>}

          {characters.map((c: Character) =>
            <CharactersListItem
              key={c.id}
              onClick={() => navigate('/character/' + c.id)}
            >
              <CharacterDeleteIcon
                onClick={(e) => {
                  e.stopPropagation();

                  dispatch(deleteCharacter(c.id));
                }}
              >
                <AiFillDelete />
              </CharacterDeleteIcon>

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