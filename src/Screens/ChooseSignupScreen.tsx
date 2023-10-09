import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppStyles} from '../Theme/AppStyles';
import {hp, commonFontStyle} from '../Theme/Fonts';
import {color} from '../Theme/color';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const ChooseSignupScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={[AppStyles.containerWithPadding, {justifyContent: 'center'}]}>
      <View style={styles.rowView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CustomerSignupScreen')}
          style={styles.boxView}>
          <Text style={styles.boxText}>Register as Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CompanySignupScreen')}
          style={styles.boxView}>
          <Text style={styles.boxText}>Join as a{'\n'}partner</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseSignupScreen;

const styles = StyleSheet.create({
  boxView: {
    padding: hp(2),
    borderWidth: 1,
    borderColor: color.PRIMARY_GREEN,
    borderRadius: 10,
    width: '47%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    ...commonFontStyle(400, 17, color.FONT_DARK_VIOLET),
    textAlign: 'center',
  },
  btn2: {
    marginTop: hp(1),
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
});
