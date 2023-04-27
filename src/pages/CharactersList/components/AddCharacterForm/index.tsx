import React, { useEffect, useRef, useState } from 'react';
import { Character } from '../../../../models/Character';
import Title from '../../../../components/Title';
import { AddCharacterFormWrapper } from './styles';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';



interface Props {
  onAddCharacter: (character: Character) => void,
  nextId: number
}

const AddCharacterForm: React.FC<Props> = ({ onAddCharacter, nextId }) => {
  const [nameToAdd, setNameToAdd] = useState('');
  const [titleToAdd, setTitleToAdd] = useState('');
  const [familyToAdd, setFamilyToAdd] = useState('');
  const [imageURLToAdd, setImageURLToAdd] = useState('');

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef?.current?.focus();
  }, []);

  const addCharacter = () => {
    onAddCharacter(
      Character(
        nextId,
        nameToAdd,
        imageURLToAdd,
        titleToAdd,
        familyToAdd
      )
    );

    setNameToAdd('');
    setTitleToAdd('');
    setFamilyToAdd('');
    setImageURLToAdd('');
  };

  return (
    <AddCharacterFormWrapper>
      <Title size="small">Add character</Title>

      <Input
        type="text"
        label="Name"
        value={nameToAdd}
        onChange={setNameToAdd}
        autofocus
      />

      <Input
        type="text"
        label="Title"
        value={titleToAdd}
        onChange={setTitleToAdd}
      />

      <Input
        type="text"
        label="Family"
        value={familyToAdd}
        onChange={setFamilyToAdd}
      />

      <Input
        type="text"
        label="Image URL"
        value={imageURLToAdd}
        onChange={setImageURLToAdd}
        onEnterPressed={addCharacter}
      />

      <Button
        onClick={addCharacter}
      >
          Add
      </Button>
    </AddCharacterFormWrapper>
  );
};

export default AddCharacterForm;