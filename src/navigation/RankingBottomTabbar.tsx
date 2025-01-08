import React from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RANKING_TABS } from '@data/menu_item';
import { Button, Icon, Text, useTheme } from '@rneui/themed';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const RankingBottomTabbar = ({ navigation }: BottomTabBarProps) => {
  const { theme } = useTheme();
  // const { name } = useRoute();
  // const { navigate } = useNavigation();

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
        const currentRoute = route;
        const isCurrentRoute =
          (route === 'RankingsTeams' && currentRoute === 'Ranking') ||
          route === currentRoute;

        const onPress = () => {
          navigation.navigate(route as never);
        };

        return (
          <Button
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
            <Icon size={24} {...icon} />
            <Text style={{ textAlign: 'center' }}>{name}</Text>
          </Button>
        );
      })}
    </View>
  );
};

export default RankingBottomTabbar;
