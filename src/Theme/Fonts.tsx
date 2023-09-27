export function getFontType(fontWeight: number) {
  if (fontWeight == 600) {
    return 'Roboto-Semibold';
  } else if (fontWeight == 400) {
    return 'Roboto-Regular';
  } else if (fontWeight == 700) {
    return 'Roboto-Bold';
  } else if (fontWeight == 500) {
    return 'Roboto-Medium';
  } else if (fontWeight == 300) {
    return 'Roboto-Light';
  } else {
    return 'Roboto-Regular';
  }
}

export const commonFontStyle = (
  fontWeight: number,
  fontSize: number,
  color: any,
) => {
  return {
    fontFamily: getFontType(fontWeight),
    fontSize: actuatedNormalize(fontSize - 3),
    color: color,
    includeFontPadding: false,
  };
};

import {Dimensions, Platform, PixelRatio} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export const hp = (i: number) => {
  return heightPercentageToDP(i);
};

export const wp = (i: number) => {
  return widthPercentageToDP(i);
};
// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function actuatedNormalize(size: any) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
