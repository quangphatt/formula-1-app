import React from 'react';
import { View } from 'react-native';
import { Button, Text } from '@components';
import { useNavigation } from '@react-navigation/native';
import { MENU_ITEMS } from '@navigation';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        label="open"
        primary
        onPress={() => {
          navigation?.openDrawer();
        }}
      />
    </View>
  );
};

export default HomeScreen;
