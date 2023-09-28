import {Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {wp, commonFontStyle, hp} from '../Theme/Fonts';
import {color} from '../Theme/color';
import CommonButton from '../Components/CommonButton';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const RateReviewScreen = (props: Props) => {
  const [select, setSelect] = useState(4);

  const navigation = useNavigation();

  const RateView=({item}:any)=>{
    return <TouchableOpacity style={{marginRight:10}} onPress={()=>setSelect(item)}>
      <Image source={require('../assets/images/star.png')} style={[styles.starIcon,{tintColor: item < select ? color.yellow : color.gray}]}/>
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
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:15}}>
        {[1,2,3,4,5].map((item,index)=>{
          return <RateView item={index}/>
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
  },
  iconStyle: {
    width: wp(30),
    height: wp(30),
  },
  headerText: {
    marginVertical:hp(2),
    ...commonFontStyle(400, 24, color.black),
  },
  headerSubText: {
    textAlign:'center',
    width:'70%',
    ...commonFontStyle(400, 18, color.black_50),
  },
  noThankText: {
    marginVertical:hp(2),
    textAlign:'center',
    ...commonFontStyle(400, 18, color.primary),
  },
  btn: {
    width: '50%',
    marginTop:hp(2),
    alignSelf: 'center',
  },
  starIcon:{
    width:30,
    height:30
  }
});
