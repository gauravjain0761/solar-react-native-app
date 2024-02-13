import { StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';
import React from 'react';
import { commonFontStyle, hp } from '../Theme/Fonts';
import { color } from '../Theme/color';
import { AppStyles } from '../Theme/AppStyles';


type Props = {
  value: any;
  placeholder: string;
  onChangeText?: (text: any) => void;
  title?: string;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  onSubmitEditing?: () => void;
  reference?: any;
  keyboardType?: any;
  maxLength?: number;
  editable?: boolean
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
  editable = true
}) => {
  return (
    <View style={[styles.container, { ...style }]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TextInput
        value={value}
        onChangeText={text => {
          onChangeText ? onChangeText(text) : {};
        }}
        style={[styles.input]}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        placeholder={placeholder ? placeholder : ''}
        placeholderTextColor={color.placeholderTextGray}
        onSubmitEditing={() => (onSubmitEditing ? onSubmitEditing() : {})}
        returnKeyType={onSubmitEditing ? 'next' : 'default'}
        ref={reference ? reference : null}
        keyboardType={keyboardType ? keyboardType : 'default'}
        maxLength={maxLength}
        editable={editable}
      />
    </View>
  );
};

export default CommonInput;

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
});
