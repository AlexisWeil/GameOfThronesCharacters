import { Character } from '../../models/Character';

interface Props {
  character: Character
}

const CharacterDetails: React.FC<Props> =
  ({
     character: {
       id,
       name,
       title,
       family,
       imageUrl
     }
  }) =>
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
    </div>;

export default CharacterDetails;