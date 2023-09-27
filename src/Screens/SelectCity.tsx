import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {hp, commonFontStyle} from '../Theme/Fonts';
import {color} from '../Theme/color';
import {AppStyles} from '../Theme/AppStyles';
import CommonButton from '../Components/CommonButton';
import GetCheckboxImage from '../Components/GetCheckboxImage';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const SelectCity = (props: Props) => {
  const cityArray = [
    {name: 'Ahmedabad', isSelected: false},
    {name: 'Amreli district', isSelected: false},
    {name: 'Anand', isSelected: false},
    {name: 'Banaskantha', isSelected: false},
    {name: 'Bharuch', isSelected: false},
    {name: 'Bhavnagar', isSelected: false},
    {name: 'Dahod', isSelected: false},
    {name: 'The Dangs', isSelected: false},
    {name: 'Gandhinagar', isSelected: false},
    {name: 'Jamnagar', isSelected: false},
    {name: 'Junagadh', isSelected: false},
    {name: 'Kutch', isSelected: false},
    {name: 'Kheda', isSelected: false},
    {name: 'Mehsana', isSelected: false},
    {name: 'Narmada', isSelected: false},
    {name: 'Navsari', isSelected: false},
    {name: 'Patan', isSelected: false},
    {name: 'Panchmahal', isSelected: false},
    {name: 'Porbandar', isSelected: false},
    {name: 'Rajkot', isSelected: false},
    {name: 'Sabarkantha', isSelected: false},
    {name: 'Surendranagar', isSelected: false},
    {name: 'Surat', isSelected: false},
    {name: 'Vyara', isSelected: false},
    {name: 'Vadodara', isSelected: false},
    {name: 'Valsad', isSelected: false},
  ];
  const navigation = useNavigation();
  const [allcityArray, setAllcityArray] = useState(cityArray);
  const [isCitySelected, setisCitySelected] = useState(false);

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

  return (
    <View style={AppStyles.containerWithPadding}>
      <Text style={styles.titleText}>
        Select your city where you want to get service
      </Text>
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
        <TouchableOpacity
          onPress={() => navigation.navigate('CustomerDashboard')}
          style={styles.skipView}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        {isCitySelected && (
          <CommonButton
            title="Select"
            onPress={() => navigation.navigate('CustomerDashboard')}
            style={{marginTop: 10}}
          />
        )}
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
  },
  skipView: {
    paddingTop: hp(1),
    alignSelf: 'center',
  },
  skipText: {
    ...commonFontStyle(500, 20, color.PRIMARY_GREEN),
    textDecorationLine: 'underline',
  },
  cityName: {
    ...commonFontStyle(400, 16, color.PRIMARY_GREEN),
  },
});
