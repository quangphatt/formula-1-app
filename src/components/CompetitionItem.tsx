import React from 'react';
import { View } from 'react-native';
import { Text, TextH3 } from '@components';
import theme from '@components/theme';

type CompetitionItemProps = {
  id: number;
  name: string;
  location: {
    country: string;
    city: string;
  };
};

export const CompetitionItem = ({
  id,
  name,
  location,
}: CompetitionItemProps) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: theme.colors.dark_gray_color,
        gap: 5,
      }}
    >
      <TextH3>{name}</TextH3>
      <Text>
        {location.city}, {location.country}
      </Text>
    </View>
  );
};
