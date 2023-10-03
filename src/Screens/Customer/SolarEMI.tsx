import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppStyles} from '../../Theme/AppStyles';
import WebView from 'react-native-webview';

type Props = {};

const SolarEMI = (props: Props) => {
  return (
    <View style={AppStyles.container}>
      <WebView source={{uri: 'https://www.google.com/'}} />
    </View>
  );
};

export default SolarEMI;

const styles = StyleSheet.create({});
