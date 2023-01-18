import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { staticCharacters } from '../CharactersList';

const CharacterDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const id = Number(params.id);

  useEffect(() => {
    if (isNaN(id)) {
      navigate('/characters');
    }
  }, []);

  if (!isNaN(id)) {
    const character = staticCharacters[id];

    if (character) {
      const {name, title, family, imageUrl} = character;

      return (
        <div>
          <img
            style={{maxWidth: '100px', maxHeight: '100px'}}
            alt={name}
            src={imageUrl}
          />
          <ul>
            <li>ID: {id}</li>
            <li>Name: {name}</li>
            <li>Title: {title}</li>
            <li>Family: {family}</li>
          </ul>
          <Link to="/characters">Go back to list</Link>
        </div>
      );
    }
    else {
      return (<div>
        Unknown character<br/>
        <Link to="/characters">Go back to list</Link>
      </div>);
    }
  }
  else {
    return (<div>
      Invalid ID<br/>
      <Link to="/characters">Go back to list</Link>
    </div>);
  }
};

export default CharacterDetails;