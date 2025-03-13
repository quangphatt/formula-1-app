import React from 'react';
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { Icon, Image, Text } from '@rneui/themed';
import f1_img from '@assets/images/f1-mini.png';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { MENU_ITEMS } from '@data/menu_item';
import { useNavigation } from '@react-navigation/native';
import { openDrawer } from '@navigation/actions';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={f1_img} style={styles.img} resizeMode="contain" />
      <Pressable onPress={openDrawer} style={styles.leftAction}>
        <Icon name="menu" type="ionicon" size={32} />
      </Pressable>
      <Text>Formula 1</Text>
      <View style={styles.itemWrapper}>
        {MENU_ITEMS.filter((item) => item.route !== 'Home').map(
          ({ name, route, icon }) => (
            <TouchableOpacity
              key={route}
              onPress={() => {
                navigation.navigate(route);
              }}
              style={styles.item}
            >
              <Icon {...icon} size={32} />
              <Text>{name}</Text>
            </TouchableOpacity>
          ),
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const useStyles = () => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  return StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,
      alignItems: 'center',
    },
    leftAction: {
      position: 'absolute',
      left: 15,
      top: insets.top + 10,
    },
    img: {
      width: width * 0.8,
      height: width * 0.5,
    },
    itemWrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
    item: {
      width: width * 0.45,
      alignItems: 'center',
      borderRadius: 10,
      marginBottom: 10,
      padding: 10,
    },
  });
};
