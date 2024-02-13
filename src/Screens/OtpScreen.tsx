import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppStyles } from '../Theme/AppStyles';
import { LOGOIMAGE, OTPPAGEIMAGE, SAVEMELOGO } from '../Theme/Resources';
import { hp, commonFontStyle } from '../Theme/Fonts';
import CommonButton from '../Components/CommonButton';
import { color } from '../Theme/color';
import OTPTextInput from 'react-native-otp-textinput';
import { errorToast } from '../Utils/CommonFunction';
import { useAppDispatch } from '../Redux/hooks';
import { onverifyVerificationCode } from '../Services/AuthService';
import { setAuthorization } from '../Utils/apiGlobal';
import { setAsyncToken, setAsyncUserInfo } from '../Utils/asyncStorage';

type Props = {};

const OtpScreen = (props: Props) => {
  const navigation = useNavigation();
  const otpInput = useRef(null);
  const [otp, setotp] = useState('');
  const [phoneNumber, setphoneNumber] = useState(
    props?.route?.params?.mobileNo,
  );
  const dispatch = useAppDispatch()

  const onPressVerify = () => {
    if (otp.length < 4) {
      errorToast('Please enter valid OTP');
    } else {
      let obj = {
        data: {
          mobile: phoneNumber,
          verificationCode: otp
        },
        onSuccess: async (res: any) => {
          setAuthorization(res?.token)
          await setAsyncToken(res?.token)
          setAsyncUserInfo(res?.data)
          setotp('')
          // navigation.navigate('SelectCity');
          navigation.reset({
            index: 0,
            routes: [{ name: 'CustomerHome' }]
          })
          // navigation.navigate('CustomerHome')
        }
      }
      dispatch(onverifyVerificationCode(obj))
    }
  }

  return (
    <View style={[AppStyles.containerWithPadding, { justifyContent: 'space-between' }]}>
      <Image source={OTPPAGEIMAGE} style={styles.imageLogo} />
      <View>
        <Text style={styles.title}>{'Verification Code'}</Text>
        <Text style={styles.des}>{'Enter the verification code you receive in your mobile number'}</Text>
        {/* <Text style={styles.mobNu}>+91-{phoneNumber}</Text> */}
        <OTPTextInput
          handleTextChange={code => setotp(code)}
          inputCount={4}
          ref={otpInput}
          textInputStyle={styles.textInputStyle}
          containerStyle={styles.containerStyle}
          tintColor={color.btnOrange}
          offTintColor={'transparent'}
        />
      </View>
      <View>
        <CommonButton title="Verify" onPress={() => { onPressVerify() }} />
        <TouchableOpacity
          onPress={() => { }}
          style={styles.signupView}>
          <Text style={styles.signupText}>
            Didn’t get a code?{' '}
            <Text style={{ ...commonFontStyle(700, 12, color.green) }}>
              Resend Now
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

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
    marginTop: hp(10)
  },
  btn: {
    width: '50%',
    alignSelf: 'center',
    marginTop: hp(3),
  },
  title: {
    ...commonFontStyle(700, 20, color.titleDarkBlue),
    marginBottom: 20
  },
  des: { ...commonFontStyle(400, 16, color.gray_1), marginBottom: hp(1) },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    // width: hp(32),
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
    ...commonFontStyle(700, 16, color.blackPrimary),
    marginRight: 0,
    backgroundColor: color.white,
    ...AppStyles.shadowview
  },
  signupView: {
    marginVertical: hp(3),
    alignSelf: 'center',
  },
  signupText: {
    ...commonFontStyle(400, 12, color.gray_1),
  },
});
