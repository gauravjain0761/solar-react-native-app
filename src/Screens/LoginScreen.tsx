import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CommonInput from '../Components/CommonInput';
import {AppStyles} from '../Theme/AppStyles';
import {SAVEMELOGO} from '../Theme/Resources';
import {hp, commonFontStyle} from '../Theme/Fonts';
import CommonButton from '../Components/CommonButton';
import {useNavigation} from '@react-navigation/native';
import {color} from '../Theme/color';

type Props = {};

const LoginScreen = (props: Props) => {
  const [mobileNo, setmobileNo] = useState('');
  const navigation = useNavigation();
  return (
    <View style={[AppStyles.containerWithPadding, {justifyContent: 'center'}]}>
      {/* <Image source={SAVEMELOGO} style={styles.imageLogo} /> */}
      <CommonInput
        title={'Mobile Number'}
        value={mobileNo}
        keyboardType="number-pad"
        maxLength={10}
        onChangeText={text => setmobileNo(text)}
        placeholder={'Enter Mobile Number'}
      />
      <CommonButton
        title="Send OTP"
        onPress={() => navigation.navigate('OtpScreen', {mobileNo: mobileNo})}
        style={styles.btn}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('ChooseSignupScreen')}
        style={styles.signupView}>
        <Text style={styles.signupText}>
          You don't have account?{' '}
          <Text style={{...commonFontStyle(700, 16, color.PRIMARY_GREEN)}}>
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageLogo: {
    height: hp(15),
    resizeMode: 'contain',
    width: hp(30),
    alignSelf: 'center',
    marginBottom: hp(8),
    marginTop: hp(10),
  },
  btn: {
    width: '50%',
    alignSelf: 'center',
  },
  signupView: {
    marginVertical: hp(3),
    alignSelf: 'center',
  },
  signupText: {
    ...commonFontStyle(400, 16, color.startGray),
  },
});
