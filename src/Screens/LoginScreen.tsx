import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import CommonInput from '../Components/CommonInput';
import { AppStyles } from '../Theme/AppStyles';
import { LOGOIMAGE, SAVEMELOGO } from '../Theme/Resources';
import { hp, commonFontStyle } from '../Theme/Fonts';
import CommonButton from '../Components/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { color } from '../Theme/color';

type Props = {};

const LoginScreen = (props: Props) => {
  const [mobileNo, setmobileNo] = useState('');
  const navigation = useNavigation();
  return (
    <View style={[AppStyles.containerWithPadding, { justifyContent: 'space-between' }]}>
      <Image source={LOGOIMAGE} style={styles.imageLogo} />
      <View>
        <Text style={styles.title}>Enter your mobile number</Text>
        <CommonInput
          value={mobileNo}
          keyboardType="number-pad"
          maxLength={10}
          onChangeText={text => setmobileNo(text)}
          placeholder={'Enter Mobile Number'}
        />
      </View>
      <SafeAreaView>
        <CommonButton
          title="Login"
          onPress={() => navigation.navigate('OtpScreen', { mobileNo: mobileNo })}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ChooseSignupScreen')}
          style={styles.signupView}>
          <Text style={styles.signupText}>
            You don't have account?{' '}
            <Text style={{ ...commonFontStyle(700, 12, color.green) }}>
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageLogo: {
    height: hp(22),
    resizeMode: 'contain',
    width: hp(30),
    alignSelf: 'center',
    marginBottom: hp(8),
    marginTop: hp(3)
  },
  signupView: {
    marginVertical: hp(3),
    alignSelf: 'center',
  },
  signupText: {
    ...commonFontStyle(400, 12, color.gray_1),
  },
  title: {
    ...commonFontStyle(700, 20, color.titleDarkBlue),
    marginBottom: 20
  }
});
