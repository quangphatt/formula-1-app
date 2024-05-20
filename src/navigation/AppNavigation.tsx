import React, { useRef } from 'react';
import { View } from 'react-native';
import { Icon, Button, Image } from '@components';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  CircuitsScreen,
  CompetitionsScreen,
  DriverScreen,
  DriversScreen,
  HomeScreen,
  PitstopsScreen,
  RacesScreen,
  TeamScreen,
  TeamsScreen,
} from '@screens';
import RankingNavigation from './RankingNavigation';
import DrawerContent from './DrawerContent';
import { navigationRef, isReadyRef } from './actions';

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  const routeNameRef = useRef();

  const onReady = () => {
    isReadyRef.current = true;
    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
  };

  const onStateChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current.getCurrentRoute().name;
    routeNameRef.current = currentRouteName;
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onStateChange}
    >
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            width: 240,
          },
        }}
        drawerContent={DrawerContent}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Circuits" component={CircuitsScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Competitions" component={CompetitionsScreen} />
        <Drawer.Screen name="Driver" component={DriverScreen} />
        <Drawer.Screen name="Drivers" component={DriversScreen} />
        <Drawer.Screen name="Pitstops" component={PitstopsScreen} />
        <Drawer.Screen name="Races" component={RacesScreen} />
        <Drawer.Screen name="Ranking" component={RankingNavigation} />
        <Drawer.Screen name="Team" component={TeamScreen} />
        <Drawer.Screen name="Teams" component={TeamsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
