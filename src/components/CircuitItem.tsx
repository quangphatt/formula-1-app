import React from 'react';
import { Text, TextH3, ButtonPreventDouble } from '@components';
import theme from '@components/theme';
import { navigate } from '@navigation';

export const CircuitItem = ({ data }) => {
  const onPress = () => {
    navigate('Circuit', { data });
  };

  return (
    <ButtonPreventDouble
      onPress={onPress}
      style={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: theme.colors.dark_gray_color,
        gap: 5,
      }}
    >
      <TextH3>{data.name}</TextH3>
      {!!data.competition.name && <Text>{data.competition.name}</Text>}
      <Text>{data.length}</Text>
    </ButtonPreventDouble>
  );
};
