import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { color } from '../Theme/color';
import { hp, commonFontStyle } from '../Theme/Fonts';
import { CHECK } from '../Theme/Resources';

type Props = {
  value: boolean;
};

const GetCheckboxImage: React.FC<Props> = ({ value }) => {
  return (
    <View>
      {value == true ? (
        <View
          style={[styles.checkView, { backgroundColor: color.navy_blue_1 }]}>
          <Image source={CHECK} style={styles.checkBox} />
        </View>
      ) : (
        <View style={styles.checkView} />
      )}
    </View>
  );
};

export default GetCheckboxImage;

const styles = StyleSheet.create({
  checkView: {
    height: hp(2.3),
    width: hp(2.3),
    borderColor: color.navy_blue_1,
    borderWidth: 1,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBox: {
    height: hp(1.5),
    width: hp(1.5),
    resizeMode: 'contain',
    tintColor: color.white,
  },
});
