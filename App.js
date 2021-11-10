/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Platform, SafeAreaView, StyleSheet, Text} from 'react-native';
import codePush from 'react-native-code-push';

const codePushConfig = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  deploymentKey: Platform.select({
    ios: 'Fehye4xljt4E9CZ8U6d5BrQrmsG4C1L4FOQyi',
    android: 'Hs6bAZkTd-qhOAM1FwYDjUSypEkMXp1bGghNn',
  }),
  installMode: codePush.InstallMode.IMMEDIATE,
};

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text>CodePush 🧡 React Native</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default codePush(codePushConfig)(App);
