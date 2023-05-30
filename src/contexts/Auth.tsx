import { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/auth';
import { Alert } from 'react-native';
import { AuthContextProps, AuthData, SignInProps } from '../@types/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProviderProps } from '../@types/provider';
import { petsService } from '../services/storage/pets';

const UserDefaultValues: AuthContextProps = {
  isLoading: false,
  signIn: async () => {},
  signOut: async () => {},
  authData: undefined,
};

const AuthContext = createContext<AuthContextProps>(UserDefaultValues);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setisLoading] = useState(true);
  const storageKey = '@AuthData';

  const clearAsync = async () => {
    await AsyncStorage.clear();
  };
  useEffect(() => {
    // loadFromStorage()
    clearAsync();
  }, []);

  const loadFromStorage = async () => {
    const auth = await AsyncStorage.getItem(storageKey);

    if (auth) {
      const parseAuth = JSON.parse(auth);
      setAuthData(parseAuth as AuthData);
    }

    setisLoading(false);
  };

  const signIn = async ({ email, password }: SignInProps) => {
    try {
      const { addPets } = petsService;
      const auth = await authService.signIn({
        email: email,
        password: password,
      });
      setAuthData(auth);

      const authToString = JSON.stringify(auth);
      AsyncStorage.setItem(storageKey, authToString);
      await addPets();
    } catch (error: any) {
      Alert.alert(error.message, 'Tente novamente');
    }
  };

  const signOut = async () => {
    setAuthData(undefined);
  };

  const value = {
    authData,
    isLoading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
