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

type Props = {};
const CompanySignupScreen = (props: Props) => {
  const [data, setData] = useState({
    company_name: '',
    owner_name: '',
    mobile: '',
    city: '',
    address: '',
    gstNo: '',
    required_installation: '',
    required_OM: '',
  });
  const navigation = useNavigation();
  return (
    <View style={AppStyles.flex}>
      <ScrollView style={AppStyles.containerWithPadding}>
        <CommonInput
          title={'Company Name'}
          value={data.company_name}
          onChangeText={text => setData({...data, company_name: text})}
          placeholder={'Enter Company Name'}
        />
        <CommonInput
          title={'Owner Name'}
          value={data.owner_name}
          onChangeText={text => setData({...data, owner_name: text})}
          placeholder={'Enter Owner Name'}
        />
        <CommonInput
          title={'Mobile Number'}
          value={data.mobile}
          keyboardType="number-pad"
          onChangeText={text => setData({...data, mobile: text})}
          placeholder={'Enter Mobile Number'}
        />
        <CommonInput
          title={'City'}
          value={data.city}
          onChangeText={text => setData({...data, city: text})}
          placeholder={'Enter city'}
        />
        <CommonInput
          title={'Address'}
          value={data.address}
          onChangeText={text => setData({...data, address: text})}
          placeholder={'Enter address'}
        />
        <CommonInput
          title={'GST No.'}
          value={data.gstNo}
          onChangeText={text => setData({...data, gstNo: text})}
          placeholder={'Enter GST No.'}
        />
        <CommonInput
          title={'Required Installation'}
          value={data.required_installation}
          onChangeText={text => setData({...data, required_installation: text})}
          placeholder={'Enter Required Installation'}
        />
        <CommonInput
          title={'Required O&M'}
          value={data.required_OM}
          onChangeText={text => setData({...data, required_OM: text})}
          placeholder={'Enter Required O&M'}
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

export default CompanySignupScreen;

const styles = StyleSheet.create({
  btn: {marginBottom: hp(6)},
});
