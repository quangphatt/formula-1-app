import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  CircuitScreen,
  CircuitsScreen,
  CompetitionsScreen,
  DriverScreen,
  DriversScreen,
  HomeScreen,
  PitstopsScreen,
  RaceScreen,
  RacesScreen,
  TeamScreen,
  TeamsScreen,
} from '@screens';
import RankingNavigation from './RankingNavigation';
import DrawerContent from './DrawerContent';
import { RootDrawerParamList } from './types';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const AppNavigation = () => {
  const onReady = () => {};

  return (
    <NavigationContainer onReady={onReady}>
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
        <Drawer.Screen name="Circuit" component={CircuitScreen} />
        <Drawer.Screen name="Circuits" component={CircuitsScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Competitions" component={CompetitionsScreen} />
        <Drawer.Screen name="Driver" component={DriverScreen} />
        <Drawer.Screen name="Drivers" component={DriversScreen} />
        <Drawer.Screen name="Pitstops" component={PitstopsScreen} />
        <Drawer.Screen name="Race" component={RaceScreen} />
        <Drawer.Screen name="Races" component={RacesScreen} />
        <Drawer.Screen name="Ranking" component={RankingNavigation} />
        <Drawer.Screen name="Team" component={TeamScreen} />
        <Drawer.Screen name="Teams" component={TeamsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
