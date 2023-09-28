import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import CommonInput from '../../Components/CommonInput';
import { useNavigation } from '@react-navigation/native';
import { AppStyles } from '../../Theme/AppStyles';
import CommonButton from '../../Components/CommonButton';
import { hp } from '../../Theme/Fonts';

type Props = {};

const CustomerProfile = (props: Props) => {
  const [data, setData] = useState({
    name: '',
    mobile: '',
    email: '',
    state: '',
    city: '',
    address: '',
    ebill: undefined,
  });
  const navigation = useNavigation();
  return (
    <View style={AppStyles.flex}>
    <ScrollView style={AppStyles.containerWithPadding}>
      <CommonInput
        title={'Name'}
        value={data.name}
        onChangeText={text => setData({...data, name: text})}
        placeholder={'Enter Name'}
      />
      <CommonInput
        title={'Mobile Number'}
        value={data.mobile}
        keyboardType="number-pad"
        onChangeText={text => setData({...data, mobile: text})}
        placeholder={'Enter Mobile Number'}
      />
      <CommonInput
        title={'Email'}
        value={data.email}
        onChangeText={text => setData({...data, email: text})}
        placeholder={'Enter Email'}
      />
      
      
      <CommonButton
        title="Submit"
        onPress={() => navigation.goBack()}
        style={styles.btn}
      />
    </ScrollView>
  </View>
  );
};

export default CustomerProfile;

const styles = StyleSheet.create({
  btn: {marginBottom: hp(6)},
});
