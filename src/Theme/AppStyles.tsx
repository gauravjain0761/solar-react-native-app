import {StyleSheet} from 'react-native';
import {color} from './color';
import {hp} from './Fonts';

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  flex: {
    flex: 1,
  },
  paddingHorizontalView: {
    paddingHorizontal: hp(3),
  },
  paddingVerticalView: {
    paddingVertical: hp(2),
  },
  containerWithPadding: {
    flex: 1,
    backgroundColor: color.white,
    padding: hp(3),
  },
  backArrow: {
    height: hp(3),
    resizeMode: 'contain',
    width: hp(3),
  },
});
