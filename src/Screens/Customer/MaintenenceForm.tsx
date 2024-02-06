import {
  KeyboardAvoidingView,
  ScrollView,
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
import { openDocPicker } from '../../Utils/CommonFunction';
import BillView from '../../Components/BillView';
import DropdownElement from '../../Components/DropdownElement';
import { categoryData, cityStateData } from '../../Utils/Constants';

type Props = {};

const MaintenenceForm = (props: Props) => {
  const [data, setData] = useState({
    name: '',
    mobile: '',
    email: '',
    state: '',
    city: '',
    address: '',
    reason: '',
    solarCapacity: '',
    ebill: undefined,
    category: '',
  });
  const navigation = useNavigation();

  const onSelectBill = async () => {
    const res = await openDocPicker();
    setData({ ...data, ebill: res });
  };

  return (
    <View style={AppStyles.flex}>
      <ScrollView style={AppStyles.container}>
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
          data={[
            { name: 'Cleaning', value: 'cleaning' },
            { name: 'Any Fault', value: 'any_fault' },
          ]}
          value={data.reason}
          setData={(text: any) => setData({ ...data, reason: text })}
          // multiSelect={true}
          placeholder={'Select reason'}
          style={styles.input}
          valueField={'value'}
          labelField={'name'}
          title={'Maintenance Reason'}
        />
        <DropdownElement
          data={categoryData}
          value={data.category}
          setData={(text: any) => setData({ ...data, category: text })}
          // multiSelect={true}
          placeholder={'Select category'}
          style={styles.input}
          valueField={'value'}
          labelField={'name'}
          title={'Category'}
        />
        <CommonInput
          title={'Solar Capacity'}
          value={data.solarCapacity}
          onChangeText={text => setData({ ...data, solarCapacity: text })}
          placeholder={'Enter solar capacity'}
          style={styles.input}
        />
        <DropdownElement
          data={cityStateData}
          value={data.state}
          setData={(text: any) => setData({ ...data, state: text })}
          // multiSelect={true}
          placeholder={'Select state'}
          style={styles.input}
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
          onPress={() => navigation.goBack()}
          style={styles.btn}
        />
      </ScrollView>
    </View>
  );
};

export default MaintenenceForm;

const styles = StyleSheet.create({
  btn: { marginBottom: hp(6), marginHorizontal: hp(2) },
  input: { marginHorizontal: hp(2) }
});
