import React from 'react';
import { View } from 'react-native';
import { TextH3, Icon, ButtonPreventDouble } from '@components';
import theme from '@components/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { openDrawer, goBack } from '@navigation';

type HeaderProps = {
  title: string;
  hasBackButton?: boolean;
};

export const Header = ({ title = '', hasBackButton }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: theme.colors.primary_color,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ButtonPreventDouble
        onPress={hasBackButton ? goBack : openDrawer}
        style={{
          position: 'absolute',
          left: 12,
          top: insets.top + 8,
        }}
      >
        <Icon
          name={hasBackButton ? 'arrow-back' : 'menu'}
          type="Ionicons"
          size={30}
          color={theme.colors.white_color}
        />
      </ButtonPreventDouble>
      <TextH3 color={theme.colors.white_color}>{title}</TextH3>
    </View>
  );
};
