import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CommonInput from '../../Components/CommonInput';
import CommonButton from '../../Components/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { AppStyles } from '../../Theme/AppStyles';
import { hp } from '../../Theme/Fonts';
import DocumentPicker from 'react-native-document-picker';
import { errorToast, openDocPicker, successToast } from '../../Utils/CommonFunction';
import BillView from '../../Components/BillView';
import DropdownElement from '../../Components/DropdownElement';
import { categoryData, cityStateData } from '../../Utils/Constants';
import { color } from '../../Theme/color';
import { emailCheck } from '../../Utils/validation';
import { useAppDispatch } from '../../Redux/hooks';
import { onAddSolarEnquiry } from '../../Services/CustomerService';

type Props = {};

const RequireSolarForm = (props: Props) => {
  const [data, setData] = useState({
    name: '',
    mobile: '',
    email: '',
    state: '',
    city: '',
    address: '',
    ebill: undefined,
    category: '',
  });
  const navigation = useNavigation();
  const dispatch = useAppDispatch()

  const onPressRequire = () => {
    if (data?.name.trim().length === 0) {
      errorToast('Please enter name');
    } else if (!/^\d*$/.test(data.mobile) || data.mobile.length == 0) {
      errorToast('Please enter valid mobile Number');
    } else if (data?.email.trim().length === 0) {
      errorToast('Please enter email address');
    } else if (!emailCheck(data?.email.trim())) {
      errorToast('Please enter valid email address');
    } else if (data.category == '') {
      errorToast('Please select category');
    } else if (data.state == '') {
      errorToast('Please select state');
    } else if (data.city == '') {
      errorToast('Please select city');
    } else if (data.address.trim() == '') {
      errorToast('Please enter address');
    }
    // else if (data.ebill == undefined) {
    //   errorToast('Please select latest electricity bill');
    // } 
    else {
      let formData = new FormData()
      // formData.append('image', {
      //   uri: data.ebill.sourceURL,
      //   type: data.ebill.mime, // or photo.type image/jpg
      //   name: data.ebill.name
      // })
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('mobile', data.mobile)
      formData.append('category', data.category)
      formData.append('state', data.state)
      formData.append('city', data.city)
      formData.append('address', data.address)
      const obj = {
        data: formData,
        onSuccess: (res: any) => {
          successToast('Required solar request created successfully')
          console.log(res)
          navigation.goBack()
        }
      }
      dispatch(onAddSolarEnquiry(obj))
    }
  }
  // console.log(data.ebill)

  return (
    <View style={AppStyles.flex}>
      <StatusBar backgroundColor={color.mainBgColor} barStyle={'dark-content'} />
      <ScrollView style={[AppStyles.container, AppStyles.paddingVerticalView]}>
        <CommonInput
          title={'Name'}
          value={data.name}
          onChangeText={text => setData({ ...data, name: text })}
          placeholder={'Enter Name'}
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
          placeholder={'Enter Email'}
          style={styles.input}
        />
        <DropdownElement
          data={categoryData}
          value={data.category}
          setData={(text: any) => setData({ ...data, category: text })}
          // multiSelect={true}
          placeholder={'Select category'}
          valueField={'value'}
          labelField={'name'}
          title={'Category'}
          style={styles.input}
        />
        <DropdownElement
          data={cityStateData}
          value={data.state}
          setData={(text: any) => setData({ ...data, state: text })}
          // multiSelect={true}
          placeholder={'Select state'}
          valueField={'state'}
          labelField={'state'}
          title={'State'}
          isSearch={true}
          searchPlaceholder="Enter state to search..."
          style={styles.input}
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
          placeholder={'Enter Address'}
          style={styles.input}
        />
        <BillView
          title={'Latest Electricity Bill'}
          placeholder={'Select Latest Electricity Bill'}
          value={data.ebill ? data.ebill : undefined}
          onChangeText={res => setData({ ...data, ebill: res })}
          style={styles.input}
        />
        <CommonButton
          title="Submit"
          onPress={() => onPressRequire()}
          style={styles.btn}
        />
      </ScrollView>
    </View>
  );
};

export default RequireSolarForm;

const styles = StyleSheet.create({
  btn: { marginBottom: hp(6), marginHorizontal: hp(2) },
  input: { marginHorizontal: hp(2) }
});
