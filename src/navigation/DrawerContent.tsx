import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, Text, useTheme } from '@rneui/themed';
import { MENU_ITEMS } from '@data/menu_item';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getCurrentRoute } from './actions';

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const onPressItem = (routeName: string) => {
    navigation.navigate(routeName);
  };

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
        {MENU_ITEMS.map((item) => (
          <MenuItem item={item} key={item.route} onPressItem={onPressItem} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;

type MenuItemProps = {
  item: any;
  onPressItem: (route: string) => void;
};

const MenuItem = ({ item, onPressItem }: MenuItemProps) => {
  const { name, route, icon } = item;
  const currentRoute = getCurrentRoute()?.name ?? '';
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
