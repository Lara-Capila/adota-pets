import AsyncStorage from '@react-native-async-storage/async-storage';
import pets from '../pets.json';
import { Pet } from '../../@types/pet';

const storageKey = '@Pets';

const addPets = async () => {
  try {
    const getPets = await fetchPets();

    if (!getPets) {
      const petsToString = JSON.stringify(pets);
      await AsyncStorage.setItem(storageKey, petsToString);
    }
  } catch (error) {
    console.error(error);
  }
};

const fetchPets = async () => {
  const pets = await AsyncStorage.getItem(storageKey);

  if (!pets) return [];
  return (await JSON.parse(pets)) as Pet[];
};

export const petsService = { addPets, fetchPets };
