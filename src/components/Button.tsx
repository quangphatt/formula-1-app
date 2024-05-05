import React, { PureComponent, RefObject } from 'react';
import { TouchableOpacity, type ViewStyle, type TextStyle } from 'react-native';
import { Icon, type IconProps } from './Icon';
import { Text } from './Text';
import debounce from 'lodash.debounce';
import theme from '@components/theme';
import styled from 'styled-components/native';

const preventDoubleClick = (WrappedComponent) => {
  class PreventDoubleClick extends PureComponent {
    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress();
    };

    onPress = debounce(this.debouncedOnPress, this.props.delay || 400, {
      leading: true,
      trailing: false,
    });

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }

  PreventDoubleClick.displayName = `withPreventDoubleClick(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return PreventDoubleClick;
};

const ButtonPreventDouble = preventDoubleClick(TouchableOpacity);

export const ButtonWapper = styled(ButtonPreventDouble)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 20px;
  background: ${(props) =>
    props.primary
      ? props.theme.colors.primary_color
      : props.disabled
      ? props.theme.colors.dark_gray_color
      : props.theme.colors.white_color};
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.disabled
        ? props.theme.colors.dark_gray_color
        : props.theme.colors.primary_color};
`;

export type ButtonProps = {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  primary?: boolean;
  disabled?: boolean;
};

export const Button = ({
  label,
  onPress = () => {},
  style,
  labelStyle,
  leftIcon,
  rightIcon,
  primary,
  disabled,
}: ButtonProps) => {
  const labelColor = primary
    ? theme.colors.white_color
    : disabled
    ? theme.colors.dark_gray_color
    : theme.colors.primary_color;

  return (
    <ButtonWapper
      onPress={onPress}
      style={{ gap: 5, ...style }}
      primary={primary}
      disabled={disabled}
    >
      {!!leftIcon?.name && <Icon {...leftIcon} color={labelColor} />}
      <Text style={{ color: labelColor, ...labelStyle }}>{label}</Text>
      {!!rightIcon?.name && <Icon {...rightIcon} color={labelColor} />}
    </ButtonWapper>
  );
};

type ButtonScrollToTopProps = {
  listRef: RefObject<ScrollView> | RefObject<FlatList> | null;
  isFlatList: boolean;
};

export const ButtonScrollToTop = ({
  listRef,
  isFlatList = false,
}: ButtonScrollToTopProps) => {
  const onScrollToTop = () => {
    if (isFlatList) {
      listRef?.current?.scrollToOffset?.({ animated: true, offset: 0 });
    } else {
      listRef?.current?.scrollTo?.({ y: 0, animated: true });
    }
  };
  const BUTTON_SIZE = 42;
  const BUTTON_MARGIN = 16;

  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: BUTTON_MARGIN,
        bottom: BUTTON_MARGIN,
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        borderRadius: BUTTON_SIZE / 2,
        backgroundColor: theme.colors.primary_color,
        zIndex: 1,
      }}
    >
      <ButtonPreventDouble onPress={onScrollToTop}>
        <Icon.VectorIcon
          name={'arrow-up'}
          size={24}
          color={theme.colors.white_color}
        />
      </ButtonPreventDouble>
    </View>
  );
};
