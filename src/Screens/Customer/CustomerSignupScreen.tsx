import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CommonInput from '../../Components/CommonInput';
import CommonButton from '../../Components/CommonButton';
import {useNavigation} from '@react-navigation/native';
import {AppStyles} from '../../Theme/AppStyles';
import {hp} from '../../Theme/Fonts';
import {openDocPicker} from '../../Utils/CommonFunction';
import BillView from '../../Components/BillView';
import DropdownElement from '../../Components/DropdownElement';
import {cityStateData} from '../../Utils/Constants';

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
    // ebill: undefined,
  });
  const navigation = useNavigation();

  return (
    <View style={AppStyles.flex}>
      <ScrollView style={AppStyles.containerWithPadding}>
        <CommonInput
          title={'Name'}
          value={data.name}
          onChangeText={text => setData({...data, name: text})}
          placeholder={'Enter name'}
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
          placeholder={'Enter email'}
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
          setData={(text: any) => setData({...data, state: text})}
          // multiSelect={true}
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
          setData={(text: any) => setData({...data, city: text})}
          // multiSelect={true}
          placeholder={'Select city'}
          valueField={'city'}
          labelField={'city'}
          title={'City'}
          isSearch={true}
          searchPlaceholder="Enter city to search..."
        />
        <CommonInput
          title={'Address'}
          value={data.address}
          onChangeText={text => setData({...data, address: text})}
          placeholder={'Enter address'}
        />
        <CommonInput
          title={'Referral Code'}
          value={data.referralCode}
          onChangeText={text => setData({...data, referralCode: text})}
          placeholder={'Enter referral code'}
        />
        <CommonButton
          title="Register"
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.btn}
        />
      </ScrollView>
    </View>
  );
};

export default CustomerSignupScreen;

const styles = StyleSheet.create({
  btn: {marginBottom: hp(6)},
});
