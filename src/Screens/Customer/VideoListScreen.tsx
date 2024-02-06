import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { AppStyles } from '../../Theme/AppStyles';
import { color } from '../../Theme/color';
import { commonFontStyle, hp } from '../../Theme/Fonts';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const VideoListScreen = (props: Props) => {
  const navigation = useNavigation()
  return (
    <View style={AppStyles.container}>
      <ScrollView style={AppStyles.container}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('FullScreenVideo')} style={styles.box}>
              <Image
                source={require('../../assets/images/foodImageTest.jpg')}
                style={styles.image}
              />
              <View style={styles.rightView}>
                <Text style={commonFontStyle(700, 14, color.titleDarkBlue)}>Solar Operations and Maintenance - Visual Assessment (4 of 7)</Text>
                <Text style={commonFontStyle(400, 13, color.gray_2)}>1M views</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default VideoListScreen;

const styles = StyleSheet.create({
  box: {
    marginHorizontal: hp(2),
    marginVertical: hp(1),
    backgroundColor: color.white,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    ...AppStyles.shadowview
  },
  image: {
    height: '100%',
    width: 100,
    resizeMode: 'cover',
  },
  rightView: {
    flex: 1,
    padding: 10,
  },
});
