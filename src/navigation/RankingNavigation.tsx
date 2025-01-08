import React from 'react';
import {
  RankingsDriversScreen,
  RankingsFastestLapsScreen,
  RankingsRacesScreen,
  RankingsStartingGridScreen,
  RankingsTeamsScreen,
} from '@screens';
import RankingBottomTabbar from './RankingBottomTabbar';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { RankingTabParamList } from './types';

const Tab = createBottomTabNavigator<RankingTabParamList>();

const RankingNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="RankingsTeams"
      tabBar={BottomTabbar}
    >
      <Tab.Screen name="RankingsTeams" component={RankingsTeamsScreen} />
      <Tab.Screen name="RankingsDrivers" component={RankingsDriversScreen} />
      <Tab.Screen name="RankingsRaces" component={RankingsRacesScreen} />
      <Tab.Screen
        name="RankingsFastestLaps"
        component={RankingsFastestLapsScreen}
      />
      <Tab.Screen
        name="RankingsStartingGrid"
        component={RankingsStartingGridScreen}
      />
    </Tab.Navigator>
  );
};

const BottomTabbar = (props: BottomTabBarProps) => (
  <RankingBottomTabbar {...props} />
);

export default RankingNavigation;
