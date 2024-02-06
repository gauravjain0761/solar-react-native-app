import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppStyles } from '../../Theme/AppStyles';
import HomeBanner from '../../Components/HomeBanner';
import CommonButton from '../../Components/CommonButton';
import { hp, commonFontStyle } from '../../Theme/Fonts';
import { color } from '../../Theme/color';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import HomeHeader from '../../Components/HomeHeader';

type Props = {};

const CustomerDashboard = (props: Props) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused()

  return (
    <View style={AppStyles.container}>
      {isFocused == true && <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />}
      <HomeHeader />
      {/* <HomeBanner /> */}
      <ScrollView>
        <View style={styles.cardMainStyle}>
          <Text style={styles.serviceText}>Our Services</Text>
          <View style={styles.rowView}>
            <TouchableOpacity onPress={() => navigation.navigate('RequireSolarForm')} style={[styles.boxView, { backgroundColor: color.btnOrange }]}>
              <Image source={require('../../assets/box1.png')} style={styles.boxImage} />
              <Text style={[styles.boxText, { color: color.white }]}>Required{'\n'}Solar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MaintenenceForm')} style={styles.boxView}>
              <Image source={require('../../assets/box2.png')} style={styles.boxImage} />
              <Text style={styles.boxText}>Service and Cleaning</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity onPress={() => navigation.navigate('SolarInsurance')} style={styles.boxView}>
              <Image source={require('../../assets/box3.png')} style={styles.boxImage} />
              <Text style={styles.boxText}>Solar{'\n'}Insurance</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SolarEMI')} style={styles.boxView}>
              <Image source={require('../../assets/box4.png')} style={styles.boxImage} />
              <Text style={styles.boxText}>Solar on{'\n'}EMI</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity onPress={() => navigation.navigate('VideoListScreen')} style={styles.boxView}>
              <Image source={require('../../assets/box5.png')} style={styles.boxImage} />
              <Text style={styles.boxText}>Check{'\n'}maintenance{'\n'}Video</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('CompanySignupScreen'); }} style={styles.boxView}>
              <Image source={require('../../assets/box2.png')} style={styles.boxImage} />
              <Text style={styles.boxText}>
                Want to register{'\n'}as solar company
              </Text>
            </TouchableOpacity>
          </View>
          {/* <CommonButton
            style={styles.btn2}
            title="Want to register as solar company?"
            onPress={() => {
              navigation.navigate('CompanySignupScreen');
            }}
          /> */}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.imageView}>
        <Image
          style={styles.whatsAppImage}
          source={require('../../assets/images/Digital_Glyph_Green.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomerDashboard;

const styles = StyleSheet.create({
  btn: {
    marginVertical: hp(3),
  },
  cardMainStyle: {
    marginTop: hp(2),
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
    marginHorizontal: hp(2)
  },

  boxView: {
    paddingHorizontal: hp(2),
    borderColor: color.PRIMARY_GREEN,
    borderRadius: 20,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    // height: hp(18.5),
    backgroundColor: color.white,
    ...AppStyles.shadowview,
    paddingTop: hp(3),
    paddingBottom: hp(4)
  },
  boxText: {
    textAlign: 'center',
    ...commonFontStyle(500, 15, color.black_1),
  },
  btn2: {
    marginTop: hp(1),
  },
  whatsAppImage: {
    height: 55,
    width: 55,
    resizeMode: 'contain',
  },
  imageView: {
    position: 'absolute',
    // backgroundColor: color.white,
    borderRadius: 50 / 2,
    bottom: hp(4),
    right: hp(3),
  },
  serviceText: {
    ...commonFontStyle(700, 16, color.titleDarkBlue),
    marginHorizontal: hp(2),
    marginBottom: hp(2)
  },
  boxImage: {
    height: 67,
    width: 67,
    resizeMode: 'contain',
    marginBottom: hp(2)
  }
});
