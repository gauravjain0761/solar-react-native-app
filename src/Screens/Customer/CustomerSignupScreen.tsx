import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CommonInput from '../../Components/CommonInput';
import CommonButton from '../../Components/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { AppStyles } from '../../Theme/AppStyles';
import { hp } from '../../Theme/Fonts';
import { errorToast, openDocPicker, successToast } from '../../Utils/CommonFunction';
import BillView from '../../Components/BillView';
import DropdownElement from '../../Components/DropdownElement';
import { cityStateData } from '../../Utils/Constants';
import { emailCheck } from '../../Utils/validation';
import { setAuthorization } from '../../Utils/apiGlobal';
import { setAsyncToken, setAsyncUserInfo } from '../../Utils/asyncStorage';
import { useAppDispatch } from '../../Redux/hooks';
import { onCustomerSignUp } from '../../Services/AuthService';
import ProfilePictureView from '../../Components/ProfilePictureView';

type Props = {};

const CustomerSignupScreen = (props: Props) => {
  const [data, setData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    state: '',
    address: '',
    referralCode: '',
    image: undefined
    // ebill: undefined,
  });
  const navigation = useNavigation();
  const dispatch = useAppDispatch()

  const onPressSignup = () => {
    if (data?.name.trim().length === 0) {
      errorToast('Please enter name');
    } else if (!/^\d*$/.test(data.mobile) || data.mobile.length == 0) {
      errorToast('Please enter valid mobile Number');
    } else if (data?.email.trim().length === 0) {
      errorToast('Please enter email address');
    } else if (!emailCheck(data?.email.trim())) {
      errorToast('Please enter valid email address');
    } else if (data.state == '') {
      errorToast('Please select state');
    } else if (data.city == '') {
      errorToast('Please select city');
    } else if (data.address.trim() == '') {
      errorToast('Please enter address');
    }
    // else if (data.image==undefined) {
    //   errorToast('Please select image');
    // }
    else {
      const formData = new FormData()

      // formData.append('image', {
      //   uri: data.ebill.sourceURL,
      //   type: data.ebill.mime, // or photo.type image/jpg
      //   name: data.ebill.name
      // })
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('mobile', data.mobile)
      formData.append('state', data.state)
      formData.append('city', data.city)
      formData.append('address', data.address)
      formData.append('referralCode', data.referralCode.trim() !== '' ? data.referralCode : '',)


      const obj = {
        data: formData,
        onSuccess: async (res: any) => {
          setAsyncUserInfo(res?.data)
          successToast('Signup successful')
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }]
          })
          setData({
            name: '',
            mobile: '',
            email: '',
            city: '',
            state: '',
            address: '',
            referralCode: '',
            image: undefined
          });
        },
        onFailure: () => {
        },
      }
      dispatch(onCustomerSignUp(obj))
    }
  }

  return (
    <View style={AppStyles.flex}>
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
          placeholder={'Enter name'}
          style={styles.input}
        />
        <CommonInput
          title={'Mobile Number'}
          value={data.mobile}
          keyboardType="number-pad"
          onChangeText={text => setData({ ...data, mobile: text })}
          placeholder={'Enter Mobile Number'}
          style={styles.input}
        />
        <CommonInput
          title={'Email'}
          value={data.email}
          onChangeText={text => setData({ ...data, email: text })}
          placeholder={'Enter email'}
          style={styles.input}
        />
        {/* <BillView
          title={'Latest Electricity Bill'}
          placeholder={'Select Latest Electricity Bill'}
          value={data.ebill ? data.ebill.name : undefined}
          onPress={() => onSelectBill()}
        /> */}
        <DropdownElement
          data={cityStateData}
          value={data.state}
          setData={(text: any) => setData({ ...data, state: text })}
          // multiSelect={true}
          style={styles.input}
          placeholder={'Select state'}
          valueField={'state'}
          labelField={'state'}
          title={'State'}
          isSearch={true}
          searchPlaceholder="Enter state to search..."
        />
        <DropdownElement
          data={
            data.state !== ''
              ? cityStateData.filter(obj => obj.state == data.state)[0].city
              : []
          }
          value={data.city}
          setData={(text: any) => setData({ ...data, city: text })}
          // multiSelect={true}
          placeholder={'Select city'}
          valueField={'city'}
          labelField={'city'}
          title={'City'}
          isSearch={true}
          searchPlaceholder="Enter city to search..."
          style={styles.input}
        />
        <CommonInput
          title={'Address'}
          value={data.address}
          onChangeText={text => setData({ ...data, address: text })}
          placeholder={'Enter address'}
          style={styles.input}
        />
        <CommonInput
          title={'Referral Code'}
          value={data.referralCode}
          onChangeText={text => setData({ ...data, referralCode: text })}
          placeholder={'Enter referral code'}
          style={styles.input}
        />
        <CommonButton
          title="Register"
          onPress={() => onPressSignup()}
          style={styles.btn}
        />
      </ScrollView>
    </View>
  );
};

export default CustomerSignupScreen;

const styles = StyleSheet.create({
  btn: {
    marginBottom: hp(6),
    marginHorizontal: hp(2)
  },
  input: {
    marginHorizontal: hp(2)
  }
});
