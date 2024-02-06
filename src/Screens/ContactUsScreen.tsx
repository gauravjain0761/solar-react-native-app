import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { hp, wp, commonFontStyle } from '../Theme/Fonts';
import { color } from '../Theme/color';
import CommonInput from '../Components/CommonInput';
import CommonButton from '../Components/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { AppStyles } from '../Theme/AppStyles';

type Props = {};

const list = [
  {
    label: '0000 0000 0000',
    image: require('../assets/images/ic_phoneCall.png'),
    onPress: () => Linking.openURL(`tel:${'0000000000'}`),
  },
  {
    label: 'abc@gmail.com',
    image: require('../assets/images/ic_mail.png'),
    onPress: () => Linking.openURL('mailto:support@example.com'),
  },
  {
    label:
      'GD297 Salt Lake Bypass HM Block, Sector III, Bidhannagar Kolkata West Bengal 700106',
    image: require('../assets/images/ic_location.png'),
    onPress: Platform.select({
      ios: () => {
        Linking.openURL(
          'http://maps.apple.com/maps?daddr=38.7875851,-9.3906089',
        );
      },
      android: () => {
        console.log('ANDROID');
        Linking.openURL('http://maps.google.com/maps').catch(err =>
          console.error('An error occurred', err),
        );
      },
    }),
  },
];

const ListIcon = ({ item }: any) => {
  return (
    <TouchableOpacity onPress={() => item.onPress()} style={styles.listStyle}>
      <Image source={item.image} style={styles.iconStyle} />
      <View style={AppStyles.flex}>
        <Text style={styles.listText}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ContactUsScreen = (props: Props) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <View style={styles.mainStyle}>
        {list.map(item => {
          return <ListIcon item={item} />;
        })}
        <CommonInput
          title={'Name'}
          value={data.name}
          style={{ marginTop: hp(3) }}
          onChangeText={text => setData({ ...data, name: text })}
          placeholder={'Enter Name'}
        />
        <CommonInput
          title={'Email'}
          value={data.email}
          onChangeText={text => setData({ ...data, email: text })}
          placeholder={'Enter Email'}
        />
        <CommonInput
          title={'Message'}
          value={data.message}
          onChangeText={text => setData({ ...data, message: text })}
          placeholder={'Enter Mobile Number'}
        />
        <CommonButton
          title="Submit"
          onPress={() => navigation.goBack()}
          style={styles.btn}
        />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: wp(5),
    backgroundColor: color.mainBgColor,
    paddingTop: hp(2)
  },
  mainStyle: {
    backgroundColor: color.white,
    width: '100%',
    elevation: 5,
    paddingHorizontal: wp(4),
    borderRadius: 18,
  },
  listStyle: {
    marginTop: hp(3),
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: color.LIGHT_GRAY,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  listText: {
    marginLeft: wp(5),
    ...commonFontStyle(500, 14, color.black),
  },
  btn: { marginBottom: hp(3) },
});
