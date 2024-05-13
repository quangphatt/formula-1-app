import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import {
  Button,
  TextH1,
  TextH3,
  Image,
  Icon,
  ButtonPreventDouble,
} from '@components';
import { MENU_ITEMS, openDrawer, navigate } from '@navigation';
import f1_img from '@assets/images/f1-mini.png';
import theme from '@components/theme';

const HomeScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        gap: 10,
        alignItems: 'center',
      }}
    >
      <Image source={f1_img} width={width} height={width / 2.4} />
      <ButtonPreventDouble
        onPress={openDrawer}
        style={{
          position: 'absolute',
          left: 15,
          top: 10,
        }}
      >
        <Icon name="menu" type="Ionicons" size={32} />
      </ButtonPreventDouble>
      <TextH1 bold>Formula 1</TextH1>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {MENU_ITEMS.filter((item) => item.route !== 'Home').map(
          ({ name, route, icon }) => (
            <ButtonPreventDouble
              key={route}
              onPress={() => {
                navigate(route);
              }}
              style={{
                width: width * 0.45,
                backgroundColor: theme.colors.primary_color,
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10,
                padding: 10,
              }}
            >
              <Icon {...icon} size={32} />
              <TextH3 bold>{name}</TextH3>
            </ButtonPreventDouble>
          ),
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
