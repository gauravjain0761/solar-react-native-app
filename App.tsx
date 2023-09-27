import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import RootContainer from './src/Navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
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
