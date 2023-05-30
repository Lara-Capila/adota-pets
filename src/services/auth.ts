import { AuthData, SignInProps } from '../@types/auth';

const signIn = async ({ email, password }: SignInProps): Promise<AuthData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'teste') {
        resolve({
          token: 'token',
          name: 'User Test',
          email,
        });
      } else {
        reject(new Error('Usuário e senha incorretos!'));
      }
    }, 500);
  });
};

export const authService = { signIn };
