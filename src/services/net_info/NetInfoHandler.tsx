import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextBodyBold } from '@components';
import { useNetInfo } from '@react-native-community/netinfo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated';
import Modal from '@components/Modal';

const AView = Animated.createAnimatedComponent(View);

const NetInfoHandler = () => {
  const [isShowNotification, toggleNotification] = useState(false);
  const insets = useSafeAreaInsets();
  const netInfo = useNetInfo();

  useEffect(() => {
    if (typeof netInfo.isConnected === 'boolean') {
      if (netInfo.isConnected) {
        Modal.hide();
        toggleNotification(false);
      } else {
        toggleNotification(true);
        setTimeout(() => {
          Modal.show({
            title: 'No Connection',
            body: `${'Your Internet connection is interrupted.'}\n${'Please check again!'}`,
            buttonPrimary: {
              label: 'OK',
              onPress: () => {
                Modal.hide();
              },
            },
          });
        }, 1000);
      }
    }
  }, [netInfo.isConnected]);

  return isShowNotification ? (
    <AView
      style={{
        zIndex: 10000,
        position: 'absolute',
        backgroundColor: netInfo.isConnected ? 'green' : 'red',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
        paddingTop: 8 + insets.top,
      }}
      entering={SlideInUp.duration(1000)}
      exiting={SlideOutUp.duration(1000).delay(1500)}
    >
      <TextBodyBold>
        {netInfo.isConnected ? 'Connected' : 'No Connection'}
      </TextBodyBold>
    </AView>
  ) : null;
};

export default NetInfoHandler;
