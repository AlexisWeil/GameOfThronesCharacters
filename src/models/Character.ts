
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