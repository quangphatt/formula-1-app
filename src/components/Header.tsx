import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Text, useTheme } from '@rneui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions } from '@react-navigation/native';

type HeaderProps = {
  title: string;
  hasBackButton?: boolean;
  actionLeft?: () => void;
};

const Header = ({ title = '', hasBackButton, actionLeft }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const navigation = useNavigation();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        onPress={actionLeft ? actionLeft : hasBackButton ? goBack : openDrawer}
        style={{
          position: 'absolute',
          left: 12,
          top: insets.top + 8,
        }}
      >
        <Icon
          name={hasBackButton || actionLeft ? 'arrow-back' : 'menu'}
          type="ionicon"
          size={30}
        />
      </TouchableOpacity>
      <Text
        style={{
          paddingHorizontal: 50,
          textAlign: 'center',
        }}
        numberOfLines={1}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
