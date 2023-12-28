export function getFontType(fontWeight: number) {
  if (fontWeight == 600) {
    return 'DMSans-SemiBold';
  } else if (fontWeight == 400) {
    return 'DMSans-Regular';
  } else if (fontWeight == 700) {
    return 'DMSans-Bold';
  } else if (fontWeight == 500) {
    return 'DMSans-Medium';
  } else if (fontWeight == 300) {
    return 'DMSans-Light';
  } else {
    return 'DMSans-Regular';
  }
}

export const commonFontStyle = (
  fontWeight: number,
  fontSize: number,
  color: any,
) => {
  return {
    fontFamily: getFontType(fontWeight),
    fontSize: actuatedNormalize(fontSize - 1),
    color: color,
    includeFontPadding: false,
  };
};

import { Dimensions, Platform, PixelRatio } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
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
