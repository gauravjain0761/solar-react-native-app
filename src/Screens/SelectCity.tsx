import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { hp, commonFontStyle } from '../Theme/Fonts';
import { color } from '../Theme/color';
import { AppStyles } from '../Theme/AppStyles';
import CommonButton from '../Components/CommonButton';
import GetCheckboxImage from '../Components/GetCheckboxImage';
import { useNavigation } from '@react-navigation/native';
import SearchInput from '../Components/SearchInput';
import { ARROWRIGHT } from '../Theme/Resources';

type Props = {};

const SelectCity = (props: Props) => {
  const cityArray = [
    { name: 'Ahmedabad', isSelected: false },
    { name: 'Amreli district', isSelected: false },
    { name: 'Anand', isSelected: false },
    { name: 'Banaskantha', isSelected: false },
    { name: 'Bharuch', isSelected: false },
    { name: 'Bhavnagar', isSelected: false },
    { name: 'Dahod', isSelected: false },
    { name: 'The Dangs', isSelected: false },
    { name: 'Gandhinagar', isSelected: false },
    { name: 'Jamnagar', isSelected: false },
    { name: 'Junagadh', isSelected: false },
    { name: 'Kutch', isSelected: false },
    { name: 'Kheda', isSelected: false },
    { name: 'Mehsana', isSelected: false },
    { name: 'Narmada', isSelected: false },
    { name: 'Navsari', isSelected: false },
    { name: 'Patan', isSelected: false },
    { name: 'Panchmahal', isSelected: false },
    { name: 'Porbandar', isSelected: false },
    { name: 'Rajkot', isSelected: false },
    { name: 'Sabarkantha', isSelected: false },
    { name: 'Surendranagar', isSelected: false },
    { name: 'Surat', isSelected: false },
    { name: 'Vyara', isSelected: false },
    { name: 'Vadodara', isSelected: false },
    { name: 'Valsad', isSelected: false },
  ];
  const navigation = useNavigation();
  const [allcityArray, setAllcityArray] = useState(cityArray);
  const [isCitySelected, setisCitySelected] = useState(false);
  const [search, setsearch] = useState('')

  const setSelectCity = (i: number) => {
    let temp = Object.assign([], allcityArray);
    temp.forEach((element, index) => {
      if (index == i) {
        element.isSelected = true;
      } else {
        element.isSelected = false;
      }
    });
    setAllcityArray(temp);
    setisCitySelected(true);
  };

  const onChangeSearch = (text: any) => {
    setsearch(text)
    if (text.trim() !== '') {
      const temp = allcityArray.filter(word => word.name.toLowerCase().includes(text))
      setAllcityArray(temp)
    } else {
      setAllcityArray(cityArray)
    }
  }

  return (
    <View style={[AppStyles.container, styles.mainView]}>
      <SearchInput containerStyle={{ marginHorizontal: hp(2), marginBottom: hp(2) }} value={search} onChangeText={(text: any) => onChangeSearch(text)} placeHolder={'Search City'} />
      <ScrollView showsVerticalScrollIndicator={false} style={AppStyles.flex}>
        {allcityArray.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => setSelectCity(index)}
              style={styles.row}
              key={index}>
              <Text style={styles.cityName}>{item.name}</Text>
              <GetCheckboxImage value={item.isSelected} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <SafeAreaView>
        {isCitySelected && (
          <CommonButton
            title="Select"
            onPress={() => navigation.navigate('CustomerHome')}
            style={{ marginTop: 10, marginHorizontal: hp(2), }}
          />
        )}
        <TouchableOpacity
          onPress={() => navigation.navigate('CustomerHome')}
          style={styles.skipView}>
          <Text style={styles.skipText}>Skip</Text>
          <Image source={ARROWRIGHT} style={styles.arrowImage} />
        </TouchableOpacity>

      </SafeAreaView>
    </View>
  );
};

export default SelectCity;

const styles = StyleSheet.create({
  titleText: {
    ...commonFontStyle(500, 20, color.black),
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1),
    justifyContent: 'space-between',
    ...AppStyles.shadowview,
    backgroundColor: color.white,
    marginBottom: 10,
    marginHorizontal: hp(2),
    borderRadius: 10,
    height: 50,
    paddingHorizontal: hp(2)
  },
  skipView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: color.btnOrange,
    marginHorizontal: hp(2),
    borderRadius: 10,
    height: 45,
    marginTop: hp(1)
  },
  skipText: {
    ...commonFontStyle(700, 14, color.btnOrange),
  },
  cityName: {
    ...commonFontStyle(400, 15, color.black_1),
  },
  mainView: {
    paddingVertical: hp(2)
  },
  arrowImage: {
    height: 20, width: 20,
    resizeMode: 'contain'
  }
});
