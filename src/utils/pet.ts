import { Pet } from '../@types/pet';
import pets from '../services/pets.json';

export const getPet = (id: string): Pet | undefined => {
  return pets.find((pet) => {
    return pet.id === Number(id);
  });
};

export const mappingPets = (): Pet[] => {
  return pets.map((pet) => pet);
};
