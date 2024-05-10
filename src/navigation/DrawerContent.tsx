import React from 'react';
import { View } from 'react-native';
import { Text, TextBody, Image, Icon, ButtonPreventDouble } from '@components';
import { useNavigation } from '@react-navigation/native';
import theme from '@components/theme';
import f1_img from '@assets/images/f1-mini.png';

const MENU = [
  {
    name: 'Home',
    route: 'Home',
    icon: {
      name: 'home',
      type: 'FontAwesome',
    },
  },
  {
    name: 'Competitions',
    route: 'Competitions',
    icon: {
      name: 'Trophy',
      type: 'AntDesign',
    },
  },
  {
    name: 'Circuits',
    route: 'Circuits',
    icon: {
      name: 'timer',
      type: 'Ionicons',
    },
  },
  {
    name: 'Teams',
    route: 'Teams',
    icon: {
      name: 'users',
      size: 14,
    },
  },
  {
    name: 'Drivers',
    route: 'Drivers',
    icon: {
      name: 'user',
    },
  },
  {
    name: 'Races',
    route: 'Races',
    icon: {
      name: 'flag-checkered',
    },
  },
  {
    name: 'Ranking',
    route: 'Ranking',
    icon: {
      name: 'chart-simple',
    },
  },
  {
    name: 'Pit Stops',
    route: 'Pitstops',
    icon: {
      name: 'stop',
      type: 'Octicons',
    },
  },
];

const DrawerContent = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Image source={f1_img} width={240} height={120} />
      <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
        {MENU.map((item) => (
          <MenuItem item={item} key={item.route} />
        ))}
      </View>
    </View>
  );
};

export default DrawerContent;

const MenuItem = ({ item }) => {
  const { name, route, icon } = item;
  const navigation = useNavigation();
  const isCurrentRoute = name === navigation.getCurrentRoute().name;

  const onPress = () => {
    navigation.navigate(route);
  };

  return (
    <ButtonPreventDouble
      disabled={isCurrentRoute}
      onPress={onPress}
      style={{
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        padding: 10,
        backgroundColor: isCurrentRoute
          ? theme.background_colors.item_background_color
          : 'transparent',
        borderRadius: 5,
      }}
    >
      <Icon size={icon.size || 18} {...icon} width={20} />
      <TextBody bold fontSize={20}>
        {name}
      </TextBody>
    </ButtonPreventDouble>
  );
};
