import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { useNetInfo } from '@react-native-community/netinfo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated';
import { Dialog, DialogData } from '@components/shared';

const AView = Animated.createAnimatedComponent(View);

const NetInfoHandler = () => {
  const [isShowNotification, toggleNotification] = useState(false);
  const insets = useSafeAreaInsets();
  const netInfo = useNetInfo();
  const [dialogData, setDialogData] = useState<DialogData>({
    isOpen: false,
    title: '',
    content: '',
    actions: [],
  });

  useEffect(() => {
    if (typeof netInfo.isConnected === 'boolean') {
      if (netInfo.isConnected) {
        onCloseDialog();
        toggleNotification(false);
      } else {
        toggleNotification(true);
        setTimeout(() => {
          setDialogData({
            isOpen: true,
            title: 'No Connection',
            content: `${'Your Internet connection is interrupted.'}\n${'Please check again!'}`,
            actions: [
              {
                label: 'OK',
                action: () => {
                  onCloseDialog();
                },
              },
            ],
          });
        }, 1000);
      }
    }
  }, [netInfo.isConnected]);

  const onCloseDialog = () => {
    setDialogData({
      isOpen: false,
      title: '',
      content: '',
      actions: [],
    });
  };

  return (
    <>
      {isShowNotification && (
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
          <Text style={{ fontWeight: '600' }}>
            {netInfo.isConnected ? 'Connected' : 'No Connection'}
          </Text>
        </AView>
      )}
      <Dialog dialogData={dialogData} onClose={onCloseDialog} />
    </>
  );
};

export default NetInfoHandler;
