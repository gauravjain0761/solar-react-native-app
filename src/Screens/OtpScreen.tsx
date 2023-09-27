import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppStyles} from '../Theme/AppStyles';
import {SAVEMELOGO} from '../Theme/Resources';
import {hp, commonFontStyle} from '../Theme/Fonts';
import CommonButton from '../Components/CommonButton';
import {color} from '../Theme/color';
import OTPTextInput from 'react-native-otp-textinput';

type Props = {};

const OtpScreen = (props: Props) => {
  const navigation = useNavigation();
  const otpInput = useRef(null);
  const [otp, setotp] = useState('');
  const [phoneNumber, setphoneNumber] = useState(
    props?.route?.params?.mobileNo,
  );

  return (
    <View style={[AppStyles.containerWithPadding, {justifyContent: 'center'}]}>
      {/* <View style={styles.imageLogo} /> */}
      <Text style={styles.title}>{'Verify your phone number'}</Text>
      <Text style={styles.des}>{'Enter the code that was sent to'}</Text>
      <Text style={styles.mobNu}>+91-{phoneNumber}</Text>
      <OTPTextInput
        handleTextChange={code => setotp(code)}
        inputCount={4}
        ref={otpInput}
        textInputStyle={styles.textInputStyle}
        containerStyle={styles.containerStyle}
      />
      <CommonButton
        title="Verify OTP"
        onPress={() => {
          navigation.navigate('SelectCity');
        }}
        style={styles.btn}
      />
    </View>
  );
};

export default OtpScreen;

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
    marginTop: hp(3),
  },
  title: {
    ...commonFontStyle(400, 19, color.black),
  },
  des: {...commonFontStyle(300, 19, color.black), marginTop: hp(2)},
  mobNu: {...commonFontStyle(500, 25, color.black), marginVertical: hp(2)},
  containerStyle: {
    flexDirection: 'row',
    width: hp(32),
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: color.input_border,
    height: hp(7),
    width: hp(7),
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderBottomWidth: 1,
    marginLeft: 0,
    ...commonFontStyle(400, 18, color.black),
    marginRight: 0,
  },
});
