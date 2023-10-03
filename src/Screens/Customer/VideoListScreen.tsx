import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppStyles} from '../../Theme/AppStyles';
import {color} from '../../Theme/color';
import {commonFontStyle, hp} from '../../Theme/Fonts';

type Props = {};

const VideoListScreen = (props: Props) => {
  return (
    <View style={AppStyles.container}>
      <ScrollView style={AppStyles.container}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            // <View style={styles.box}>
            <TouchableOpacity style={styles.box}>
              <Image
                source={require('../../assets/images/foodImageTest.jpg')}
                style={styles.image}
              />
              <View style={styles.rightView}>
                <Text style={commonFontStyle(700, 16, color.PRIMARY_GREEN)}>
                  Solar Operations and Maintenance - Visual Assessment (4 of 7)
                </Text>
                <Text style={commonFontStyle(400, 14, color.starText)}>
                  1M views
                </Text>
              </View>
            </TouchableOpacity>
            // </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default VideoListScreen;

const styles = StyleSheet.create({
  box: {
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.65,
    elevation: 10,
    // height: 50,
    marginHorizontal: hp(2),
    marginVertical: hp(1),
    backgroundColor: color.white,
    borderRadius: 10,
    // padding: hp(2),
    overflow: 'hidden',
    flexDirection: 'row',
  },
  image: {
    height: 70,
    width: 100,
    resizeMode: 'cover',
  },
  rightView: {
    flex: 1,
    padding: 10,
  },
});
