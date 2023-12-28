import { StyleSheet } from 'react-native';
import { color } from './color';
import { hp } from './Fonts';

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.mainBgColor,
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
    backgroundColor: color.mainBgColor,
    padding: hp(2),
  },
  backArrow: {
    height: 40,
    resizeMode: 'contain',
    width: 40,
    marginRight: hp(2)
  },
  shadowview: {
    shadowColor: '#99ABC6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  }
});
