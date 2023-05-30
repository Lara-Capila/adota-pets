export type FavoritesContextProps = {
  favorites: string[];
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
  addFavorite: (id: string) => Promise<void>;
  removeFavorite: (id: string) => Promise<void>;
  getFavorites: (id: string) => Promise<boolean>;
};

export const FavoritesDefaultValue: FavoritesContextProps = {
  favorites: [],
  setFavorites: (state) => state,
  addFavorite: async () => {},
  getFavorites: async () => false,
  removeFavorite: async () => {},
};
