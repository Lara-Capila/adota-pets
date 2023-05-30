import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import theme from '../constants/default-colors.json';
import { HomeIcon, MagnifyingGlassIcon } from 'react-native-heroicons/mini';
import Details from '../screens/Details';
import Search from '../screens/Search';
import { SCREEN_NAMES } from '../constants/screenNames';
import Logo from '../components/base/Logo';
import { petsService } from '../services/storage/pets';

const { DETAILS_SCREEN, HOME_SCREEN, SEARCH_SCREEN } = SCREEN_NAMES;

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName={HOME_SCREEN}>
      <HomeStack.Screen
        name="Listagem"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name={DETAILS_SCREEN}
        component={Details}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: () => <Logo />,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.gray[50],
        },
      }}
    >
      <Tab.Screen
        name={HOME_SCREEN}
        component={HomeStackScreen}
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
      <Tab.Screen
        name={SEARCH_SCREEN}
        component={Search}
        options={{
          tabBarIcon: () => (
            <MagnifyingGlassIcon
              width={25}
              height={25}
              stroke={theme.colors.dark}
            />
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
