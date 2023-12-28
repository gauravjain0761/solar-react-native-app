import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { color } from '../Theme/color';
import { hp, commonFontStyle } from '../Theme/Fonts';
import { Dropdown } from 'react-native-element-dropdown';
import { AppStyles } from '../Theme/AppStyles';

type Props = {
  setData: () => void;
  data: any;
  value: any;
  placeholder: any;
  valueField: any;
  style: any;
  placeholderTextColor: any;
  labelField: any;
  title: any;
  isSearch: boolean;
  searchPlaceholder: any;
};

const DropdownElement: React.FC<Props> = ({
  setData,
  data,
  value,
  placeholder,
  valueField,
  style,
  placeholderTextColor,
  labelField,
  title,
  isSearch = false,
  searchPlaceholder,
}) => {
  return (
    <View style={[styles.container, { ...style }]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Dropdown
        style={[styles.input]}
        placeholderStyle={{
          ...commonFontStyle(400, 12, 'rgba(0,0,0,0.3)'),
          textAlign: 'left',
        }}
        search={isSearch}
        data={data}
        selectedTextStyle={{ ...commonFontStyle(400, 12, color.titleTextInputDarkBlue) }}
        iconColor={color.gray_2}
        labelField={labelField}
        valueField={valueField}
        maxHeight={250}
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        inputSearchStyle={{ ...commonFontStyle(400, 12, color.titleTextInputDarkBlue) }}
        value={value}
        onChange={item => {
          setData(item[valueField]);
        }}
        renderItem={item => {
          return (
            <View>
              <Text style={styles.textItem}>
                {item[labelField ? labelField : valueField]}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default DropdownElement;

const styles = StyleSheet.create({
  title: {
    ...commonFontStyle(700, 14, color.titleTextInputDarkBlue),
    marginBottom: 8,
  },
  input: {
    height: 50,
    paddingHorizontal: hp(2),
    borderRadius: 10,
    marginBottom: hp(3),
    ...commonFontStyle(400, 12, color.titleTextInputDarkBlue),
    backgroundColor: color.white,
    ...AppStyles.shadowview,
  },
  container: {
    // backgroundColor: color.white,
  },
  textItem: {
    paddingVertical: 10,
    paddingHorizontal: hp(2),
    ...commonFontStyle(400, 12, color.titleTextInputDarkBlue),
  },
});
