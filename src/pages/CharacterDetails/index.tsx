import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Character } from '../../models/Character';
import Loader from '../../components/Loader';
import CharacterImage from '../../components/CharacterImage';
import Title from '../../components/Title';
import { CharacterDetailsWrapper, Detail } from './styles';

interface Props {
  characters: Character[],
  loading: boolean
}

const CharacterDetails: React.FC<Props> = ({ characters, loading }) => {
  const params = useParams();

  const id = Number(params.id);

  const character = characters.find((c) => c.id === id);

  return (
    <>
      {loading && <Loader />}

      {!loading && !character &&
        <div>
          Unknown character<br/>
          <Link to="/characters">Go back to list</Link>
        </div>
      }

      {!loading && character &&
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