import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, Image, Text, useTheme } from '@rneui/themed';
import { navigate, getCurrentRoute, closeDrawer } from './actions';
import f1_img from '@assets/images/f1-mini.png';
import { MENU_ITEMS } from '@data/menu_item';

const DrawerContent = () => {
  return (
    <View>
      <Image source={f1_img} width={240} height={120} />
      <TouchableOpacity
        onPress={closeDrawer}
        style={{
          position: 'absolute',
          right: 15,
          top: 10,
        }}
      >
        <Icon name="xmark" size={24} />
      </TouchableOpacity>
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
  const { theme } = useTheme();

  const onPress = () => {
    navigate(route);
  };

  return (
    <TouchableOpacity
      disabled={isCurrentRoute}
      onPress={onPress}
      style={{
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        padding: 10,
        backgroundColor: isCurrentRoute ? theme.colors.primary : 'transparent',
        borderRadius: 5,
      }}
    >
      <Icon size={icon.size || 22} {...icon} width={26} />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};
