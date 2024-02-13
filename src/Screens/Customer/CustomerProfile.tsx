import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CommonInput from '../../Components/CommonInput';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { AppStyles } from '../../Theme/AppStyles';
import CommonButton from '../../Components/CommonButton';
import { hp } from '../../Theme/Fonts';
import { color } from '../../Theme/color';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { onGetUserData, onUpdateCustomerData } from '../../Services/AuthService';
import ImageCropPicker from 'react-native-image-crop-picker';
import ProfilePictureView from '../../Components/ProfilePictureView';
import { errorToast, successToast } from '../../Utils/CommonFunction';
import { emailCheck } from '../../Utils/validation';

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
    image: undefined,
  });
  const navigation = useNavigation();
  const isFocused = useIsFocused()
  const dispatch = useAppDispatch()
  const { userId, userData } = useAppSelector(e => e.common)
  useEffect(() => {
    dispatch(onGetUserData({ userId: userId }))
  }, [])
  useEffect(() => {
    setData({
      ...data,
      name: userData?.name,
      email: userData?.email,
      mobile: userData?.mobile
    })
  }, [userData])


  const onPressSubmit = () => {
    if (data?.name.trim().length === 0) {
      errorToast('Please enter name');
    } else if (data?.email.trim().length === 0) {
      errorToast('Please enter email address');
    } else if (!emailCheck(data?.email.trim())) {
      errorToast('Please enter valid email address');
    } else {
      const formData = new FormData()

      // formData.append('image', {
      //   uri: data.ebill.sourceURL,
      //   type: data.ebill.mime, // or photo.type image/jpg
      //   name: data.ebill.name
      // })
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('mobile', data.mobile)
      console.log('-----------', formData)
      const obj = {
        userId: userId,
        data: formData,
        onSuccess: async (res: any) => {
          successToast('Profile updated')
          // dispatch(onGetUserData({ userId: userId }))
        },
        onFailure: () => {
        },
      }
      dispatch(onUpdateCustomerData(obj))
    }
  }

  return (
    <View style={AppStyles.flex}>
      <StatusBar backgroundColor={color.mainBgColor} barStyle={'dark-content'} />
      <ScrollView style={AppStyles.container}>
        <ProfilePictureView
          value={data.image ? data.image : undefined}
          onChangeText={res => setData({ ...data, image: res })}
          style={styles.input}
        />

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
          editable={false}
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
          onPress={() => onPressSubmit()}
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
