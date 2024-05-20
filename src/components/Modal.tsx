import React from 'react';
import { View, Dimensions } from 'react-native';
import { magicModal } from 'react-native-magic-modal';
import {
  Text,
  TextH3,
  TextBody,
  Icon,
  Button,
  type ButtonProps,
} from '@components';
import theme from '@components/theme';

const ActionType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const AlertType = {
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger',
};

type ModalProps = {
  title: string;
  body: string;
  buttonPrimary?: ButtonProps;
  buttonSecondary?: ButtonProps;
  type: 'success' | 'info' | 'warning' | 'danger';
};

const show = ({
  title = '',
  body = '',
  buttonPrimary,
  buttonSecondary,
  type = AlertType.INFO,
}: ModalProps) => {
  magicModal.show(
    <Modal
      title={title}
      body={body}
      buttonPrimary={buttonPrimary}
      buttonSecondary={buttonSecondary}
      alertType={type}
    />,
    {
      animationIn: 'fadeIn',
      animationOut: 'fadeOut',
      style: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      propagateSwipe: true,
    },
  );
};

const hide = () => {
  magicModal.hide();
};

const Modal = ({
  title,
  body,
  buttonPrimary,
  buttonSecondary,
  alertType,
}: ModalProps) => {
  const { width, height } = Dimensions.get('window');

  const getAlertColor = () => {
    switch (alertType) {
      case AlertType.SUCCESS:
        return theme.colors.success;
      case AlertType.INFO:
        return theme.colors.info;
      case AlertType.WARNING:
        return theme.colors.warning;
      case AlertType.DANGER:
        return theme.colors.danger;
    }
  };

  const getAlertIcon = () => {
    switch (alertType) {
      case AlertType.SUCCESS:
        return 'check-circle';
      case AlertType.WARNING:
        return 'warning';
      case AlertType.DANGER:
        return 'exclamation-circle';
    }
  };

  return (
    <View
      style={{
        width: width / 1.2,
        maxWidth: 600,
        backgroundColor: theme.colors.white_color,
        justifyContent: 'center',
        borderRadius: 10,
        padding: 16,
        gap: 5,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {alertType !== AlertType.INFO && (
          <Icon
            size={54}
            name={getAlertIcon()}
            color={getAlertColor()}
            type="FontAwesome"
          />
        )}
        {!!title && (
          <TextH3
            color={alertType === AlertType.INFO ? '#1D232E' : getAlertColor()}
            bold
          >
            {title}
          </TextH3>
        )}
        {!!body && <TextBody>{body}</TextBody>}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
        }}
      >
        {!!buttonSecondary?.label && (
          <Button {...buttonSecondary} style={{ flex: 1, maxWidth: '50%' }} />
        )}
        {!!buttonPrimary?.label && (
          <Button
            primary
            {...buttonPrimary}
            style={{ flex: 1, maxWidth: '50%' }}
          />
        )}
      </View>
    </View>
  );
};

export default { show, hide, AlertType, ActionType };
