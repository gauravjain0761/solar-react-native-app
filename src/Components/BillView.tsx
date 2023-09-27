import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
  onPress: () => void;
};

const BillView: React.FC<Props> = ({
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
  onPress,
}) => {
  return (
    <View style={[styles.container, {...style}]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TouchableOpacity onPress={() => onPress()} style={[styles.input]}>
        {value ? (
          <Text style={styles.text}>{value}</Text>
        ) : (
          <Text style={[styles.text, {color: 'rgba(0,0,0,0.3)'}]}>
            {placeholder}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BillView;

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
    justifyContent: 'center',
  },
  container: {
    backgroundColor: color.white,
  },
  text: {...commonFontStyle(400, 18, color.black)},
});
