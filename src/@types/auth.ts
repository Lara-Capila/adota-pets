export type AuthData = {
  token: string;
  email: string;
  name: string;
};

export type SignInProps = {
  email: string;
  password: string;
};

export type AuthContextProps = {
  authData?: AuthData;
  signIn: ({ email, password }: SignInProps) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
};
