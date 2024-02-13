import { LogBox, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import RootContainer from './src/Navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import { color } from './src/Theme/color';
import Toast from 'react-native-toast-message';
import { AppStyles } from './src/Theme/AppStyles';
import { SCREEN_WIDTH, commonFontStyle } from './src/Theme/Fonts';

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    LogBox.ignoreAllLogs();

  }, []);

  const toastConfig = {
    success: ({ text1, text2, type, props, ...rest }: any) =>
      type === 'success' && (
        <SafeAreaView>
          <View style={styles.textStyleToastSuccess}>
            <Text style={styles.textStyleToast}>{text1}</Text>
          </View>
        </SafeAreaView>
      ),
    error: ({ text1, text2, type, props, ...rest }: any) => {
      if (type === 'error') {
        return (
          <SafeAreaView>
            <View style={styles.toastStyle}>
              <Text style={styles.textStyleToast}>{text1}</Text>
            </View>
          </SafeAreaView>
        );
      }
    },
  };

  return (
    <View style={AppStyles.flex}>
      <StatusBar backgroundColor={color.mainBgColor} barStyle={'dark-content'} />
      <RootContainer />
      <Toast
        ref={ref => Toast.setRef(ref)}
        config={toastConfig}
        position="top"
        topOffset={0}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  toastStyle: {
    backgroundColor: color.red_ED7C7C,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: SCREEN_WIDTH,
    // paddingRight: 50,
    // borderRadius: 5,
    // borderLeftWidth: 6,
    // borderLeftColor: colors.red_ED7C7C,
    // borderWidth: 1.5,
    // borderColor: colors.red_ED7C7C,
  },
  textStyleToastSuccess: {
    backgroundColor: color.green,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: SCREEN_WIDTH,
    // paddingRight: 50,
    // borderRadius: 5,
    // borderLeftWidth: 6,
    // borderLeftColor: colors.green_20CA60,
    // borderWidth: 1.5,
    // borderColor: colors.green_20CA60,
  },
  textStyleToast: {
    // marginLeft: hp(2)
    ...commonFontStyle(500, 16, color.white),
    textAlign: 'center'
  },
});
