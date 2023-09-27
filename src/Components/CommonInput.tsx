import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {commonFontStyle, hp} from '../Theme/Fonts';
import {color} from '../Theme/color';

type Props = {
  value: any;
  placeholder: string;
  onChangeText?: (text: any) => void;
  title: string;
  secureTextEntry?: boolean;
  style?: any;
  onSubmitEditing?: () => void;
  reference?: any;
  keyboardType?: any;
  maxLength?: number;
};

const CommonInput: React.FC<Props> = ({
  value,
  placeholder,
  onChangeText,
  title,
  secureTextEntry,
  style,
  onSubmitEditing,
  reference,
  keyboardType,
  maxLength,
}) => {
  return (
    <View style={[styles.container, {...style}]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TextInput
        value={value}
        onChangeText={text => {
          onChangeText ? onChangeText(text) : {};
        }}
        style={[styles.input]}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        placeholder={placeholder ? placeholder : ''}
        placeholderTextColor={'rgba(0,0,0,0.3)'}
        onSubmitEditing={() => (onSubmitEditing ? onSubmitEditing() : {})}
        returnKeyType={onSubmitEditing ? 'next' : 'default'}
        ref={reference ? reference : null}
        keyboardType={keyboardType ? keyboardType : 'default'}
        maxLength={maxLength}
      />
    </View>
  );
};

export default CommonInput;

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
});
