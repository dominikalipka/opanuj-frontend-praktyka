import { useEffect, useState } from 'react';
import { Character } from '../types/Character';

type Props = {
  name: string;
  gender: string;
};

export const useFetchCharacters = ({ name, gender }: Props) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    if (name || gender) {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`
      )
        .then((response) => response.json())
        .then((data) => setCharacters(data.results || []))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [name, gender]);

  return characters;
};
