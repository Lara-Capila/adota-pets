import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { Image } from 'react-native';

import theme from '../constants/default-colors.json';
import { HomeIcon } from 'react-native-heroicons/solid';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 80, height: 55 }}
      source={require('../../assets/images/Logo.png')}
    />
  );
};

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: () => <LogoTitle />,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.gray[50],
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <HomeIcon width={25} height={25} stroke={theme.colors.dark} />
          ),
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
