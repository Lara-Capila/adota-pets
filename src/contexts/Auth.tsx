import { createContext, useState, useContext } from 'react';
import { authService } from '../services/auth';
import { Alert } from 'react-native';

type AuthProviderProps = {
  children: React.ReactNode;
};

export type AuthData = {
  token: string;
  email: string;
  name: string;
};

export type SignInProps = {
  email: string;
  password: string;
};

type AuthContextProps = {
  authData?: AuthData;
  signIn: ({ email, password }: SignInProps) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
};

const UserDefaultValues: AuthContextProps = {
  isLoading: false,
  signIn: async () => {},
  signOut: async () => {},
  authData: undefined,
};

const AuthContext = createContext<AuthContextProps>(UserDefaultValues);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setisLoading] = useState(true);

  const signIn = async ({ email, password }: SignInProps) => {
    try {
      const auth = await authService.signIn({
        email: email,
        password: password,
      });

      setAuthData(auth);
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
