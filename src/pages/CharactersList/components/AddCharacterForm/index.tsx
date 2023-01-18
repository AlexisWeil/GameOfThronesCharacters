import { useEffect, useRef, useState } from 'react';
import { Character } from '../../../../models/Character';

interface Props {
  idNextCharacter: number,
  onAddCharacter: (c: Character) => void
}

const AddCharacterForm: React.FC<Props> = (props) => {
  const [nameToAdd, setNameToAdd] = useState('');
  const [titleToAdd, setTitleToAdd] = useState('');
  const [familyToAdd, setFamilyToAdd] = useState('');
  const [imageURLToAdd, setImageURLToAdd] = useState('');

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef?.current?.focus();
  }, []);

  const addCharacter = () => {
    const characterToAdd =
      Character(
        props.idNextCharacter,
        nameToAdd,
        imageURLToAdd,
        titleToAdd,
        familyToAdd
      );

    props.onAddCharacter(characterToAdd);
  };

  return (
    <div>
      <h3>Add new character</h3>
      Name:
      <input
        ref={nameInputRef}
        type="text"
        onChange={(e) => setNameToAdd(e.target.value)}
      /><br/>

      Title:
      <input
        type="text"
        onChange={(e) => setTitleToAdd(e.target.value)}
      /><br/>

      Family:
      <input
        type="text"
        onChange={(e) => setFamilyToAdd(e.target.value)}
      /><br/>

      Image URL:
      <input
        type="text"
        onKeyUp={(e) => {
          if (e.key === 'Enter')
            addCharacter();
        }}
        onChange={(e) => setImageURLToAdd(e.target.value)}
      /><br/>
      <br/>

      <button onClick={() => addCharacter()}>
        Add
      </button>
    </div>
  );
};

export default AddCharacterForm;