
export interface Character {
  id: number,
  name: string,
  imageUrl: string,
  title: string,
  family: string
}

export const Character = (
  id: number,
  name: string,
  imageUrl: string,
  title: string,
  family: string
): Character => ({
  id,
  name,
  imageUrl,
  title,
  family
});

export interface CharacterAPI {
  id: number,
  firstName: string,
  lastName: string,
  fullName: string,
  image: string,
  imageUrl: string,
  title: string,
  family: string
}

export const parseCharacterAPI = (c: CharacterAPI): Character =>
  Character(
    c.id,
    c.fullName,
    c.imageUrl,
    c.title,
    c.family
  );