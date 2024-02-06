import { Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { wp, commonFontStyle, hp, SCREEN_WIDTH } from '../Theme/Fonts';
import { color } from '../Theme/color';
import CommonButton from '../Components/CommonButton';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const RateReviewScreen = (props: Props) => {
  const [select, setSelect] = useState(4);

  const navigation = useNavigation();

  const RateView = ({ item }: any) => {
    return <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setSelect(item)}>
      <Image source={require('../assets/images/star.png')} style={[styles.starIcon, { tintColor: item < select ? color.yellow : color.gray }]} />
    </TouchableOpacity>
  }

  return (
    <View style={styles.content}>
      <Image
        source={require('../assets/images/review.png')}
        style={styles.iconStyle}
      />
      <Text style={styles.headerText}>Your opinion matters to us</Text>
      <Text style={styles.headerSubText}>
        We work super hard to make glose better for you,and would love to know
        how would you rate our app?
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return <RateView item={index} />
        })}
      </View>
      <CommonButton
        title="Submit"
        onPress={() => navigation.goBack()}
        style={styles.btn}
      />
      <TouchableOpacity>
        <Text style={styles.noThankText}>No Thanks</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RateReviewScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.mainBgColor
  },
  iconStyle: {
    width: wp(30),
    height: wp(30),
  },
  headerText: {
    marginVertical: hp(2),
    ...commonFontStyle(700, 22, color.titleDarkBlue),
  },
  headerSubText: {
    textAlign: 'center',
    width: '70%',
    ...commonFontStyle(400, 14, color.gray_2),
  },
  noThankText: {
    marginVertical: hp(2),
    textAlign: 'center',
    ...commonFontStyle(400, 16, color.gray_1),
  },
  btn: {
    marginTop: hp(2),
    marginHorizontal: hp(2),
    width: SCREEN_WIDTH - hp(4)
  },
  starIcon: {
    width: 30,
    height: 30
  }
});
