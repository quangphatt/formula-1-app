import { Image, Text, useTheme } from '@rneui/themed';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type TeamItemProps = {
  data: any;
  navigation: any;
};

export const TeamItem = ({ data, navigation }: TeamItemProps) => {
  const { theme } = useTheme();

  const onPress = () => {
    navigation.navigate('Team', { data });
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: theme.colors.grey4,
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
        <Text>{data.name.replace('\n', '')}</Text>
        {!!data.base && <Text>{data.base}</Text>}
      </View>
    </TouchableOpacity>
  );
};
