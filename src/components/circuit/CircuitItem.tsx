import React from 'react';
import { Text, useTheme } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';

type CircuitItemProps = {
  data: any;
  navigation: any;
};

export const CircuitItem = ({ data, navigation }: CircuitItemProps) => {
  const { theme } = useTheme();

  const onPress = () => {
    navigation.navigate('Circuit', { data });
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: theme.colors.grey4,
        gap: 5,
        marginBottom: 10,
      }}
    >
      <Text>{data.name}</Text>
      {!!data.competition.name && <Text>{data.competition.name}</Text>}
      <Text>{data.length}</Text>
    </TouchableOpacity>
  );
};
