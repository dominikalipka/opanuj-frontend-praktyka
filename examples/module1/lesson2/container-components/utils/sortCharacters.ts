import { Character } from '../types/Character';

type Props = {
  characters: Character[];
  sortOption: string;
};

export const sortCharacters = ({ characters, sortOption }: Props) => {
  return [...characters].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'created') {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 0;
  });
};
