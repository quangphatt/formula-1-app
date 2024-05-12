import React from 'react';
import {
  RankingsDriversScreen,
  RankingsFastestLapsScreen,
  RankingsRacesScreen,
  RankingsStartingGridScreen,
  RankingsTeamsScreen,
} from '@screens';
import RankingBottomTabbar from './RankingBottomTabbar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const RankingNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="RankingsTeams"
      tabBar={(props) => <RankingBottomTabbar {...props} />}
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

export default RankingNavigation;
