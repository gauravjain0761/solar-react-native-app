import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../Theme/color';
import {hp, commonFontStyle} from '../Theme/Fonts';
import {Dropdown} from 'react-native-element-dropdown';

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
}) => {
  return (
    <View style={[styles.container, {...style}]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Dropdown
        style={[styles.input, style]}
        placeholderStyle={{
          ...commonFontStyle(400, 18, 'rgba(0,0,0,0.3)'),
          textAlign: 'left',
        }}
        data={data}
        selectedTextStyle={{...commonFontStyle(400, 18, color.black)}}
        iconColor={color.black}
        labelField={labelField}
        valueField={valueField}
        maxHeight={300}
        placeholder={placeholder}
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
    ...commonFontStyle(400, 18, color.black),
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: color.input_border,
    height: hp(7),
    paddingHorizontal: hp(2),
    borderRadius: 15,
    marginBottom: hp(3),
    ...commonFontStyle(400, 18, color.black),
  },
  container: {
    backgroundColor: color.white,
  },
  textItem: {
    paddingVertical: 10,
    paddingHorizontal: hp(2),
  },
});
