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

type Props = {};

const CustomerSignupScreen = (props: Props) => {
  const [data, setData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: '',
    address: '',
    ebill: undefined,
  });
  const navigation = useNavigation();

  const onSelectBill = async () => {
    const res = await openDocPicker();
    setData({...data, ebill: res});
  };
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
        <BillView
          title={'Latest Electricity Bill'}
          placeholder={'Select Latest Electricity Bill'}
          value={data.ebill ? data.ebill.name : undefined}
          onPress={() => onSelectBill()}
        />
        <CommonInput
          title={'Location'}
          value={data.location}
          onChangeText={text => setData({...data, location: text})}
          placeholder={'Enter location'}
        />
        <CommonInput
          title={'Address'}
          value={data.address}
          onChangeText={text => setData({...data, address: text})}
          placeholder={'Enter address'}
        />
        {/* <CommonInput
          title={'Location'}
          value={data.location}
          onChangeText={text => setData({...data, location: text})}
          placeholder={'Enter location'}
        /> */}
        <CommonButton
          title="Register"
          onPress={() => navigation.navigate('CustomerDashboard')}
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