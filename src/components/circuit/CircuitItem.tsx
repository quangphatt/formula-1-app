import React from 'react';
import { Button, Text } from '@rneui/themed';
import { Pressable, TouchableOpacity } from 'react-native';

type CircuitItemProps = {
  data: any;
  navigation: any;
};

export const CircuitItem = ({ data, navigation }: CircuitItemProps) => {
  const onPress = () => {
    navigation.navigate('Circuit', { data });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{data.name}</Text>
      {!!data.competition.name && <Text>{data.competition.name}</Text>}
      <Text>{data.length}</Text>
    </TouchableOpacity>
  );
};
