import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState } from 'react';
import { ProviderProps } from '../@types/provider';
import { favoritesService } from '../services/storage/favorites';
import {
  FavoritesContextProps,
  FavoritesDefaultValue,
} from '../@types/favorites';

const FavoritesContext = createContext<FavoritesContextProps>(
  FavoritesDefaultValue
);
export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const { excludeFavorite, fetchFavorites, saveToStorage } = favoritesService;

  const addFavorite = async (id: string) => {
    const allFavorites = await fetchFavorites();

    const favorite = allFavorites.map((item) => {
      if (item.id.toString() === id) {
        item.favorite = !item.favorite;
      }
      return item;
    });

    saveToStorage(favorite);
  };

  const removeFavorite = async (id: string) => {
    excludeFavorite(id);
  };

  const getFavorites = async (id: string) => {
    console.log(id, 'id');
    const allFavorites = await fetchFavorites();
    console.log(allFavorites, 'allFavorites');

    const favorite = allFavorites.find((item) => item.id.toString() === id);
    return favorite?.favorite ?? false;
  };

  const value = {
    favorites,
    setFavorites,
    addFavorite,
    removeFavorite,
    getFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
