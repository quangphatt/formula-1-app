import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, Image, Text, useTheme } from '@rneui/themed';
import f1_img from '@assets/images/f1-mini.png';
import { MENU_ITEMS } from '@data/menu_item';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const onPressItem = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <View>
      <Image source={f1_img} width={240} height={120} />
      <TouchableOpacity
        onPress={() => navigation.closeDrawer()}
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
          <MenuItem item={item} key={item.route} onPressItem={onPressItem} />
        ))}
      </View>
    </View>
  );
};

export default DrawerContent;

type MenuItemProps = {
  item: any;
  onPressItem: (route: string) => void;
};

const MenuItem = ({ item, onPressItem }: MenuItemProps) => {
  const { name, route, icon } = item;
  const currentRoute = name;
  const isCurrentRoute =
    route === 'Ranking'
      ? currentRoute?.includes('Ranking')
      : route === currentRoute;
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      disabled={isCurrentRoute}
      onPress={() => {
        onPressItem(route);
      }}
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
