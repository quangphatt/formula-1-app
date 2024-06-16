import React from 'react';
import { View } from 'react-native';
import { TextH3, Icon, ButtonPreventDouble } from '@components';
import theme from '@components/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { openDrawer, goBack } from '@navigation';

type HeaderProps = {
  title: string;
  hasBackButton?: boolean;
  actionLeft?: () => void;
};

export const Header = ({ title = '', hasBackButton, actionLeft }) => {
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
        onPress={actionLeft ? actionLeft : hasBackButton ? goBack : openDrawer}
        style={{
          position: 'absolute',
          left: 12,
          top: insets.top + 8,
        }}
      >
        <Icon
          name={hasBackButton || actionLeft ? 'arrow-back' : 'menu'}
          type="Ionicons"
          size={30}
          color={theme.colors.white_color}
        />
      </ButtonPreventDouble>
      <TextH3
        style={{
          paddingHorizontal: 50,
          textAlign: 'center',
        }}
        numberOfLines={1}
        color={theme.colors.white_color}
      >
        {title}
      </TextH3>
    </View>
  );
};
