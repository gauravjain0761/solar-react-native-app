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
import { openDocPicker } from '../../Utils/CommonFunction';
import BillView from '../../Components/BillView';
import DropdownElement from '../../Components/DropdownElement';
import { categoryData, cityStateData } from '../../Utils/Constants';
import { color } from '../../Theme/color';

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

  return (
    <View style={AppStyles.flex}>
      <StatusBar backgroundColor={color.mainBgColor} barStyle={'dark-content'} />
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
          onPress={() => navigation.goBack()}
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
