import React from 'react';
import { View } from 'react-native';
import { Button, Image, Text, useTheme } from '@rneui/themed';

type DriverItemProps = {
  data: any;
  navigation: any;
};

export const DriverItem = ({ data, navigation }: DriverItemProps) => {
  const { theme } = useTheme();

  const onPress = () => {
    navigation.navigate('Driver', { data });
  };

  return (
    <Button
      onPress={onPress}
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: theme.colors.grey3,
        gap: 10,
        alignItems: 'center',
      }}
    >
      <Image
        source={{ uri: data.image }}
        width={70}
        borderRadius={10}
        resizeMode="contain"
      />
      <View style={{ flex: 1 }}>
        <Text>{data.name}</Text>
        {!!data.country.name && <Text>{data.country.name}</Text>}
        {!!data.teams?.[0]?.team?.name && (
          <Text>{data.teams[0].team.name}</Text>
        )}
      </View>
    </Button>
  );
};
