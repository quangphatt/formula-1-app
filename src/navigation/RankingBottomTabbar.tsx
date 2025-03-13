import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RANKING_TABS } from '@data/menu_item';
import { Icon, Text, useTheme } from '@rneui/themed';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { getCurrentRoute } from './actions';

const RankingBottomTabbar = ({ navigation }: BottomTabBarProps) => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 64,
        backgroundColor: theme.colors.white,
        shadowColor: theme.colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      }}
    >
      {RANKING_TABS.map(({ name, route, icon }) => {
        const currentRoute = getCurrentRoute()?.name ?? '';
        const isCurrentRoute =
          (route === 'RankingsTeams' && currentRoute === 'Ranking') ||
          route === currentRoute;

        const onPress = () => {
          navigation.navigate(route as never);
        };

        return (
          <TouchableOpacity
            disabled={isCurrentRoute}
            key={route}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              borderTopWidth: 2,
              borderColor: isCurrentRoute
                ? theme.colors.primary
                : 'transparent',
              paddingVertical: 5,
            }}
          >
            <Icon
              size={24}
              {...icon}
              color={isCurrentRoute ? theme.colors.primary : theme.colors.black}
            />
            <Text
              style={{
                textAlign: 'center',
                color: isCurrentRoute
                  ? theme.colors.primary
                  : theme.colors.black,
              }}
            >
              {name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RankingBottomTabbar;
