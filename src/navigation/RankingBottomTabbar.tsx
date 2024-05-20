import React from 'react';
import { View } from 'react-native';
import { TextSubBody, Icon, ButtonPreventDouble } from '@components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { navigate, getCurrentRoute } from './actions';
import theme from '@components/theme';
import { RANKING_TABS } from './menu_item';

const RankingBottomTabbar = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 64,
        backgroundColor: theme.colors.white_color,
        shadowColor: theme.colors.black_color,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      }}
    >
      {RANKING_TABS.map(({ name, route, icon }) => {
        const currentRoute = getCurrentRoute()?.name;
        const isCurrentRoute =
          (route === 'RankingsTeams' && currentRoute === 'Ranking') ||
          route === currentRoute;

        const onPress = () => {
          navigate(route);
        };

        return (
          <ButtonPreventDouble
            disabled={isCurrentRoute}
            key={route}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              borderTopWidth: 2,
              borderColor: isCurrentRoute
                ? theme.colors.primary_color
                : 'transparent',
              paddingVertical: 5,
            }}
          >
            <Icon size={icon.size || 24} primary={isCurrentRoute} {...icon} />
            <TextSubBody
              primary={isCurrentRoute}
              style={{ textAlign: 'center' }}
            >
              {name}
            </TextSubBody>
          </ButtonPreventDouble>
        );
      })}
    </View>
  );
};

export default RankingBottomTabbar;
