import React from 'react';
import { View } from 'react-native';
import { Text, useTheme } from '@rneui/themed';

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
  const { theme } = useTheme();

  return (
    <View
      style={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: theme.colors.grey4,
        gap: 5,
        marginBottom: 10,
      }}
    >
      <Text>{name}</Text>
      <Text>
        {location.city}, {location.country}
      </Text>
    </View>
  );
};
