import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {color} from '../Theme/color';
import {hp, commonFontStyle} from '../Theme/Fonts';
import {CHECK} from '../Theme/Resources';

type Props = {
  value: boolean;
};

const GetCheckboxImage: React.FC<Props> = ({value}) => {
  return (
    <View>
      {value == true ? (
        <View
          style={[styles.checkView, {backgroundColor: color.PRIMARY_GREEN}]}>
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
    borderColor: color.black,
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
