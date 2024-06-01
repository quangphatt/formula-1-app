import React from 'react';
import { View } from 'react-native';
import { Text, TextH3, Image, ButtonPreventDouble } from '@components';
import theme from '@components/theme';
import { navigate } from '@navigation';

export const DriverItem = ({ data }) => {
  const onPress = () => {
    navigate('Driver', { data });
  };

  return (
    <ButtonPreventDouble
      onPress={onPress}
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: theme.colors.dark_gray_color,
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
        <TextH3>{data.name}</TextH3>
        {!!data.country.name && <Text>{data.country.name}</Text>}
        {!!data.teams?.[0]?.team?.name && (
          <Text>{data.teams[0].team.name}</Text>
        )}
      </View>
    </ButtonPreventDouble>
  );
};
