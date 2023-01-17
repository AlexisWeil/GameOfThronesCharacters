
export interface Character {
  id: number,
  name: string,
  imageUrl: string
}

export const Character = (
  id: number,
  name: string,
  imageUrl: string
): Character => ({
  id,
  name,
  imageUrl
});