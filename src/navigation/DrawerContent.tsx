import React from 'react';
import { View } from 'react-native';
import { TextBody, Image, Icon, ButtonPreventDouble } from '@components';
import { useNavigation } from '@react-navigation/native';
import { navigate, getCurrentRoute, closeDrawer } from './actions';
import theme from '@components/theme';
import f1_img from '@assets/images/f1-mini.png';
import { MENU_ITEMS } from './menu_item';

const DrawerContent = () => {
  return (
    <View>
      <Image source={f1_img} width={240} height={120} />
      <ButtonPreventDouble
        onPress={closeDrawer}
        style={{
          position: 'absolute',
          right: 15,
          top: 10,
        }}
      >
        <Icon name="xmark" size={24} />
      </ButtonPreventDouble>
      <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
        {MENU_ITEMS.map((item) => (
          <MenuItem item={item} key={item.route} />
        ))}
      </View>
    </View>
  );
};

export default DrawerContent;

const MenuItem = ({ item }) => {
  const { name, route, icon } = item;
  const currentRoute = getCurrentRoute()?.name;
  const isCurrentRoute =
    route === 'Ranking'
      ? currentRoute?.includes('Ranking')
      : route === currentRoute;

  const onPress = () => {
    navigate(route);
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
      <Icon size={icon.size || 22} {...icon} width={26} />
      <TextBody bold fontSize={22}>
        {name}
      </TextBody>
    </ButtonPreventDouble>
  );
};
