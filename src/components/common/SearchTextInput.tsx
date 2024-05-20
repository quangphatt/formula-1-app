import React, { useRef } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import { Text, Icon, ButtonPreventDouble } from '@components';
import theme from '@components/theme';

type SearchTextInputProps = {
  searchText: string;
  setSearchText: () => void;
  textInputProps: any;
};

export const SearchTextInput = ({
  searchText,
  setSearchText,
  textInputProps,
}) => {
  const ref = useRef(null);
  const textInput = useRef('');

  const onSearch = () => {
    Keyboard.dismiss();
    setSearchText(textInput.current);
  };

  const onClear = () => {
    setSearchText('');
    ref?.current?.clear();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        gap: 5,
      }}
    >
      <View
        style={{
          flex: 1,
          height: 40,
        }}
      >
        <TextInput
          ref={ref}
          onChangeText={(text) => {
            textInput.current = text;
          }}
          style={{
            flex: 1,
            borderWidth: 1,
            padding: 5,
            borderRadius: 10,
            borderColor: theme.colors.dark_gray_color,
          }}
          placeholderTextColor={theme.colors.dark_gray_color}
          {...textInputProps}
        />
        <ButtonPreventDouble
          onPress={onClear}
          style={{
            position: 'absolute',
            right: 5,
            top: 8,
            backgroundColor: theme.background_colors.item_background_color,
            alignItems: 'center',
            justifyContent: 'center',
            width: 24,
            height: 24,
            borderRadius: 12,
          }}
        >
          <Icon name="xmark" size={18} color={theme.colors.white_color} />
        </ButtonPreventDouble>
      </View>
      <ButtonPreventDouble
        onPress={onSearch}
        style={{
          backgroundColor: theme.colors.primary_color,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
      >
        <Icon
          name="search"
          type="Ionicons"
          size={24}
          color={theme.colors.white_color}
        />
      </ButtonPreventDouble>
    </View>
  );
};
