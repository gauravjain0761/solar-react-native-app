import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../Theme/color';
import {hp, commonFontStyle} from '../Theme/Fonts';

type Props = {
  title: string;
  onPress: () => void;
  style: any;
};

const CommonButton: React.FC<Props> = ({title, onPress, style = undefined}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.greenbtn, {...style}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  greenbtn: {
    borderRadius: 10,
    backgroundColor: color.PRIMARY_GREEN,
    alignItems: 'center',
    height: hp(6.5),
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: color.PRIMARY_GREEN,

  },
  text: {
    ...commonFontStyle(500, 18, color.white),
  },
});
