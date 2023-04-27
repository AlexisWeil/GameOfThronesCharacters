import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import CharacterImage from '../../components/CharacterImage';
import Title from '../../components/Title';
import { CharacterDetailsWrapper, Detail } from './styles';
import { useAppSelector } from '../../redux/store';
import DisplayError from '../../components/DisplayError';

const CharacterDetails: React.FC = () => {
  const { characters, isFetchingCharacters, fetchingError } = useAppSelector((state) => state.characters);
  const params = useParams();

  const id = Number(params.id);

  const character = characters.find((c) => c.id === id);

  return (
    <>
      {isFetchingCharacters && <Loader />}

      {!isFetchingCharacters && !character &&
        <div>
          <DisplayError>Unknown character</DisplayError>
          <Link to="/characters">Go back to list</Link>
        </div>
      }

      {fetchingError && <DisplayError>{fetchingError}</DisplayError>}

      {!isFetchingCharacters && character &&
        <CharacterDetailsWrapper>
          <Title size="small">{character.name}</Title>

          <CharacterImage
            size="large"
            name={character.name}
            url={character.imageUrl}
          /> <br/>

          <Detail>
            <strong>Title</strong> <span>{character.title}</span>
          </Detail>

          <Detail>
            <strong>Family</strong> <span>{character.family}</span>
          </Detail>
        </CharacterDetailsWrapper>
      }
    </>
  );
};

export default CharacterDetails;