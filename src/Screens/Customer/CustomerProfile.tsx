import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CommonInput from '../../Components/CommonInput';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { AppStyles } from '../../Theme/AppStyles';
import CommonButton from '../../Components/CommonButton';
import { hp } from '../../Theme/Fonts';
import { color } from '../../Theme/color';

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
  const isFocused = useIsFocused()

  return (
    <View style={AppStyles.flex}>
      <StatusBar backgroundColor={color.mainBgColor} barStyle={'dark-content'} />
      <ScrollView style={AppStyles.container}>
        <CommonInput
          title={'Name'}
          value={data.name}
          onChangeText={text => setData({ ...data, name: text })}
          placeholder={'Enter Name'}
          style={{ marginHorizontal: hp(2) }}
        />
        <CommonInput
          title={'Mobile Number'}
          value={data.mobile}
          keyboardType="number-pad"
          onChangeText={text => setData({ ...data, mobile: text })}
          placeholder={'Enter Mobile Number'}
          style={{ marginHorizontal: hp(2) }}
        />
        <CommonInput
          title={'Email'}
          value={data.email}
          onChangeText={text => setData({ ...data, email: text })}
          placeholder={'Enter Email'}
          style={{ marginHorizontal: hp(2) }}
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
  btn: { marginBottom: hp(6), marginHorizontal: hp(2) },
});
