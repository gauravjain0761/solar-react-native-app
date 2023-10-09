import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {AppStyles} from '../../Theme/AppStyles';
import HomeBanner from '../../Components/HomeBanner';
import CommonButton from '../../Components/CommonButton';
import {hp, commonFontStyle} from '../../Theme/Fonts';
import {color} from '../../Theme/color';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const CustomerDashboard = (props: Props) => {
  const navigation = useNavigation();

  return (
    <View style={[AppStyles.paddingHorizontalView, AppStyles.container]}>
      <HomeBanner />
      <ScrollView>
        <View style={styles.cardMainStyle}>
          {/* <CommonButton
            style={styles.btn}
            title="Check maintenence video"
            onPress={() => {}}
          /> */}
          <View style={styles.rowView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('RequireSolarForm')}
              style={[styles.boxView]}>
              <Text style={styles.boxText}>Required Solar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MaintenenceForm')}
              style={[
                styles.boxView,
                // {
                //   backgroundColor: 'rgba(175, 6, 184,0.2)',
                //   borderBottomWidth: 5,
                //   borderRadius: 15,
                //   borderColor: 'rgba(175, 6, 184,1)',
                // },
              ]}>
              <Text style={styles.boxText}>Service & Cleaning</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SolarInsurance')}
              style={[
                styles.boxView,
                // {
                //   backgroundColor: 'rgba(6, 184, 71,0.2)',
                //   borderBottomWidth: 5,
                //   borderRadius: 15,
                //   borderColor: 'rgba(6, 184, 71,1)',
                // },
              ]}>
              <Text style={styles.boxText}>Solar Insurance</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SolarEMI')}
              style={[
                styles.boxView,
                // {
                //   backgroundColor: 'rgba(6, 169, 184,0.2)',
                //   borderBottomWidth: 5,
                //   borderRadius: 15,
                //   borderColor: 'rgba(6, 169, 184,1)',
                // },
              ]}>
              <Text style={styles.boxText}>Solar on EMI</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('VideoListScreen')}
              style={[
                styles.boxView,
                // {
                //   backgroundColor: 'rgba(6, 184, 71,0.2)',
                //   borderBottomWidth: 5,
                //   borderRadius: 15,
                //   borderColor: 'rgba(6, 184, 71,1)',
                // },
              ]}>
              <Text style={styles.boxText}>{'Check maintenence video'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CompanySignupScreen');
              }}
              style={[
                styles.boxView,
                // {
                //   backgroundColor: 'rgba(6, 169, 184,0.2)',
                //   borderBottomWidth: 5,
                //   borderRadius: 15,
                //   borderColor: 'rgba(6, 169, 184,1)',
                // },
              ]}>
              <Text style={styles.boxText}>
                {'Want to register as solar company?'}
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
  },

  boxView: {
    padding: hp(2),
    // borderWidth: 1,
    borderColor: color.PRIMARY_GREEN,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(18.5),
    shadowColor: color.black_30,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  boxText: {
    textAlign: 'center',
    ...commonFontStyle(500, 19, color.FONT_DARK_VIOLET),
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
});
