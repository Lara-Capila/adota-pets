import React from 'react';
import Router from './src/routes/router';
import { AuthProvider, useAuth } from './src/contexts/Auth';
import * as SplashScreen from 'expo-splash-screen';
import { FavoritesProvider } from './src/contexts/Favorites';

const App = () => {
  const { isLoading } = useAuth();
  return (
    <>
      {isLoading ? (
        SplashScreen.hideAsync()
      ) : (
        <AuthProvider>
          <FavoritesProvider>
            <Router />
          </FavoritesProvider>
        </AuthProvider>
      )}
    </>
  );
};

export default App;
