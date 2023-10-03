import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CommonInput from '../../Components/CommonInput';
import CommonButton from '../../Components/CommonButton';
import {useNavigation} from '@react-navigation/native';
import {AppStyles} from '../../Theme/AppStyles';
import {hp} from '../../Theme/Fonts';
import DocumentPicker from 'react-native-document-picker';
import {openDocPicker} from '../../Utils/CommonFunction';
import BillView from '../../Components/BillView';

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
  });
  const navigation = useNavigation();

  return (
    <View style={AppStyles.flex}>
      <ScrollView style={AppStyles.containerWithPadding}>
        <CommonInput
          title={'Name'}
          value={data.name}
          onChangeText={text => setData({...data, name: text})}
          placeholder={'Enter Name'}
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
          placeholder={'Enter Email'}
        />

        <CommonInput
          title={'State'}
          value={data.state}
          onChangeText={text => setData({...data, state: text})}
          placeholder={'Enter State'}
        />
        <CommonInput
          title={'City'}
          value={data.city}
          onChangeText={text => setData({...data, city: text})}
          placeholder={'Enter City'}
        />
        <CommonInput
          title={'Address'}
          value={data.address}
          onChangeText={text => setData({...data, address: text})}
          placeholder={'Enter Address'}
        />
        <BillView
          title={'Latest Electricity Bill'}
          placeholder={'Select Latest Electricity Bill'}
          value={data.ebill ? data.ebill : undefined}
          onChangeText={res => setData({...data, ebill: res})}
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
  btn: {marginBottom: hp(6)},
});
