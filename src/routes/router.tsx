import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useAuth } from '../contexts/Auth';

import '../server/pets';

const Router = () => {
  const { authData } = useAuth();

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
