import { LogBox, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import RootContainer from './src/Navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import { color } from './src/Theme/color';

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.mainBgColor} barStyle={'dark-content'} />
      <RootContainer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
