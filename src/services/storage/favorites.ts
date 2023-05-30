import AsyncStorage from '@react-native-async-storage/async-storage';
import { petsService } from './pets';
import { Pet } from '../../@types/pet';
const storageKey = '@Favorites';

const saveToStorage = async (allPets: Pet[]) => {
  await AsyncStorage.setItem(storageKey, JSON.stringify(allPets));
};

const fetchFavorites = async () => {
  const allPets = await AsyncStorage.getItem(storageKey);

  if (!allPets) return [];
  return JSON.parse(allPets) as Pet[];
};

const excludeFavorite = async (key: string) => {};

export const favoritesService = {
  saveToStorage,
  fetchFavorites,
  excludeFavorite,
};
