import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Button, Icon, Image, Text } from '@rneui/themed';
import f1_img from '@assets/images/f1-mini.png';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MENU_ITEMS } from '@data/menu_item';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        gap: 10,
        alignItems: 'center',
      }}
    >
      <Image source={f1_img} width={width} height={width / 2.4} />
      <Button
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={{
          position: 'absolute',
          left: 15,
          top: insets.top + 10,
        }}
      >
        <Icon name="menu" type="Ionicons" size={32} />
      </Button>
      <Text>Formula 1</Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {MENU_ITEMS.filter((item) => item.route !== 'Home').map(
          ({ name, route, icon }) => (
            <Button
              key={route}
              onPress={() => {
                navigation.navigate(route);
              }}
              style={{
                width: width * 0.45,
                // backgroundColor: theme.colors.primary_color,
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10,
                padding: 10,
              }}
            >
              <Icon {...icon} size={32} />
              <Text>{name}</Text>
            </Button>
          ),
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
