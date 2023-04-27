import React, { useEffect, useRef, useState } from 'react';
import { Character } from '../../../../models/Character';
import Title from '../../../../components/Title';
import { AddCharacterFormWrapper } from './styles';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import { useTranslation } from 'react-i18next';



interface Props {
  onAddCharacter: (character: Character) => void,
  nextId: number
}

const AddCharacterForm: React.FC<Props> = ({ onAddCharacter, nextId }) => {
  const { t } = useTranslation();
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
      <Title size="small">{t('characters.add.title')}</Title>

      <Input
        type="text"
        label={t('characters.details.character-name')}
        value={nameToAdd}
        onChange={setNameToAdd}
        autofocus
      />

      <Input
        type="text"
        label={t('characters.details.character-title')}
        value={titleToAdd}
        onChange={setTitleToAdd}
      />

      <Input
        type="text"
        label={t('characters.details.character-family')}
        value={familyToAdd}
        onChange={setFamilyToAdd}
      />

      <Input
        type="text"
        label={t('characters.details.character-image-url')}
        value={imageURLToAdd}
        onChange={setImageURLToAdd}
        onEnterPressed={addCharacter}
      />

      <Button
        onClick={addCharacter}
      >
        {t('characters.add.button')}
      </Button>
    </AddCharacterFormWrapper>
  );
};

export default AddCharacterForm;