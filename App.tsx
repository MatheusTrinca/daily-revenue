import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import { Home } from './src/screens/Home';
import theme from './src/global/styles/theme';

import {
  NotoSans_400Regular,
  NotoSans_700Bold,
} from '@expo-google-fonts/noto-sans';
import { loadAsync } from 'expo-font';
import { SafeAreaView } from 'react-native';

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function load() {
      await loadAsync({
        NotoSans_400Regular,
        NotoSans_700Bold,
      });
    }

    load().finally(() => {
      setAppIsReady(true);
    });
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar translucent style="light" backgroundColor="transparent" />
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
