import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { MagicModalPortal } from 'react-native-magic-modal';
import NetInfoHandler from '@services/net_info';
import { AppNavigation } from '@navigation';
import theme from '@components/theme';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <NetInfoHandler />
          <MagicModalPortal />
          <AppNavigation />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
