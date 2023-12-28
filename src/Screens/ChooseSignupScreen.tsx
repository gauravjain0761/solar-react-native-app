import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { AppStyles } from '../Theme/AppStyles';
import { hp, commonFontStyle } from '../Theme/Fonts';
import { color } from '../Theme/color';
import { useNavigation } from '@react-navigation/native';
import { CUSTOMER_SIGNUP, LOGOIMAGE, PARTNER_SIGNUP } from '../Theme/Resources';
import CommonButton from '../Components/CommonButton';

type Props = {};

const ChooseSignupScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={[AppStyles.containerWithPadding, { justifyContent: 'space-between' }]}>
      <Image source={LOGOIMAGE} style={styles.imageLogo} />
      <View>
        <Text style={styles.title}>Create an Account</Text>
        <View style={styles.rowView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CustomerSignupScreen')}
            style={styles.boxView}>
            <Image source={CUSTOMER_SIGNUP} style={styles.signupImage} />
            <Text style={styles.boxText}>Register as a</Text>
            <Text style={[styles.boxText, { color: color.borderOrange }]}>Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CompanySignupScreen')}
            style={styles.boxView}>
            <Image source={PARTNER_SIGNUP} style={styles.signupImage} />
            <Text style={styles.boxText}>Register as a</Text>
            <Text style={[styles.boxText, { color: color.borderOrange }]}>Partner</Text>
          </TouchableOpacity>
        </View>
      </View>

      <SafeAreaView>
        <CommonButton
          title="Continue"
          onPress={() => { }}
        />
      </SafeAreaView>
    </View>
  );
};

export default ChooseSignupScreen;

const styles = StyleSheet.create({
  boxView: {
    padding: hp(2),
    borderWidth: 1,
    borderColor: color.borderOrange,
    borderRadius: 25,
    width: '47%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(5)
  },
  boxText: {
    ...commonFontStyle(400, 14, color.navy_blue_1),
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
  imageLogo: {
    height: hp(22),
    resizeMode: 'contain',
    width: hp(30),
    alignSelf: 'center',
  },
  title: {
    ...commonFontStyle(700, 30, color.titleDarkBlue)
  },
  signupImage: {
    height: hp(15),
    resizeMode: 'contain',
    width: hp(15),
    marginBottom: 15
  }
});
