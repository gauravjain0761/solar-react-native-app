import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CommonInput from '../Components/CommonInput';
import { AppStyles } from '../Theme/AppStyles';
import { LOGOIMAGE, SAVEMELOGO } from '../Theme/Resources';
import { hp, commonFontStyle } from '../Theme/Fonts';
import CommonButton from '../Components/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { color } from '../Theme/color';
import { errorToast } from '../Utils/CommonFunction';
import { dispatchAction, useAppDispatch } from '../Redux/hooks';
import { onsendVerificationCode } from '../Services/AuthService';
import { getAsyncToken, getAsyncUserInfo } from '../Utils/asyncStorage';
import { USER_INFO } from '../Redux/actionTypes';
import { setAuthorization } from '../Utils/apiGlobal';
import Loader from '../Components/Loader';
import SplashScreen from 'react-native-splash-screen';

type Props = {};

const LoginScreen = (props: Props) => {
  const [mobileNo, setmobileNo] = useState('');
  const navigation = useNavigation();
  const dispatch = useAppDispatch()
  const [loadingLogin, setloadingLogin] = useState(true)

  useEffect(() => {
    getToken()
  }, [])

  const getToken = async () => {

    let token = await getAsyncToken()
    console.log(token)
    if (token) {
      let userData = await getAsyncUserInfo()
      dispatchAction(dispatch, USER_INFO, userData)
      setAuthorization(token?.split(' ')[1])
      navigation.reset({ index: 0, routes: [{ name: 'CustomerHome' }] })
      setloadingLogin(false)
      setTimeout(() => {
        SplashScreen.hide();
      }, 3000);
    } else {
      setloadingLogin(false)
      setTimeout(() => {
        SplashScreen.hide();
      }, 3000);
    }
  }

  const onPressLogin = () => {
    // navigation.navigate('OtpScreen', { mobileNo: mobileNo })
    if (!/^\d*$/.test(mobileNo) || mobileNo.length == 0) {
      errorToast('Please enter valid mobile number');
    } else {
      let obj = {
        data: {
          mobile: mobileNo
        },
        onSuccess: () => {
          navigation.navigate('OtpScreen', { mobileNo: mobileNo })
          setmobileNo('')
        }
      }
      dispatch(onsendVerificationCode(obj))
    }
  }
  if (!loadingLogin) {
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
            onPress={() => onPressLogin()}
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
  } else {
    return (<Loader />)
  }

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
