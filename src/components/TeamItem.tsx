import React from 'react';
import { View } from 'react-native';
import { Text, TextH3, Image, ButtonPreventDouble } from '@components';
import theme from '@components/theme';
import { navigate } from '@navigation';

export const TeamItem = ({ data }) => {
  const onPress = () => {
    navigate('Team', { data });
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
        source={{ uri: data.logo }}
        width={70}
        borderRadius={10}
        resizeMode="contain"
      />
      <View style={{ flex: 1 }}>
        <TextH3>{data.name.replace('\n', '')}</TextH3>
        {!!data.base && <Text>{data.base}</Text>}
      </View>
    </ButtonPreventDouble>
  );
};
