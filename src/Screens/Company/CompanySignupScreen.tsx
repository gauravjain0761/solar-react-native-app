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
import DropdownElement from '../../Components/DropdownElement';
import { cityStateData } from '../../Utils/Constants';

type Props = {};
const CompanySignupScreen = (props: Props) => {
  const [data, setData] = useState({
    company_name: '',
    owner_name: '',
    mobile: '',
    city: '',
    state: '',
    address: '',
    gstNo: '',
    required_installation: '',
    required_OM: '',
  });
  const navigation = useNavigation();
  return (
    <View style={AppStyles.flex}>
      <ScrollView style={AppStyles.container}>
        <CommonInput
          title={'Company Name'}
          value={data.company_name}
          onChangeText={text => setData({ ...data, company_name: text })}
          placeholder={'Enter Company Name'}
          style={styles.input}
        />
        <CommonInput
          title={'Owner Name'}
          value={data.owner_name}
          onChangeText={text => setData({ ...data, owner_name: text })}
          placeholder={'Enter Owner Name'}
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
          placeholder={'Enter address'}
          style={styles.input}
        />
        <CommonInput
          title={'GST No.'}
          value={data.gstNo}
          onChangeText={text => setData({ ...data, gstNo: text })}
          placeholder={'Enter GST No.'}
          style={styles.input}
        />
        <CommonInput
          title={'Required Installation'}
          value={data.required_installation}
          onChangeText={text => setData({ ...data, required_installation: text })}
          placeholder={'Enter Required Installation'}
          style={styles.input}
        />
        <CommonInput
          title={'Required O&M'}
          value={data.required_OM}
          onChangeText={text => setData({ ...data, required_OM: text })}
          placeholder={'Enter Required O&M'}
          style={styles.input}
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
  btn: {
    marginBottom: hp(6),
    marginHorizontal: hp(2)
  },
  input: {
    marginHorizontal: hp(2)
  }
});
