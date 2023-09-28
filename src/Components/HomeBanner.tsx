import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {color} from '../Theme/color';
import {hp, commonFontStyle} from '../Theme/Fonts';
import Carousel, {Pagination} from 'react-native-snap-carousel';

type Props = {};

const HomeBanner: React.FC<Props> = ({}) => {
  const width = Dimensions.get('window').width - hp(6);
  const [index, setIndex] = useState(0);
  return (
    <View style={{height: 160, alignSelf: 'center'}}>
      <Carousel
        sliderWidth={width}
        itemWidth={width}
        height={160}
        data={[0, 1, 2, 3, 4, 5]}
        onSnapToItem={(index: any) => setIndex(index)}
        renderItem={({}) => (
          <Image
            source={{
              uri: 'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg',
            }}
            style={{
              height: 160,
              width: width,
              resizeMode: 'cover',
              alignSelf: 'center',
              borderRadius: 10,
            }}
          />
        )}
        pagingEnabled={true}
        snapEnabled={true}
        vertical={false}
        defaultIndex={0}
      />
      <View style={styles.dotView}>
        {[0, 1, 2, 3, 4, 5].map((element, i) => {
          if (i == index) {
            return <View style={styles.selected} />;
          } else {
            return <View style={styles.unselected} />;
          }
        })}
      </View>
    </View>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  selected: {
    marginHorizontal: 2,
    height: 10,
    width: 10,
    backgroundColor: color.PRIMARY_GREEN,
    borderRadius: 10 / 2,
  },
  unselected: {
    marginHorizontal: 2,
    height: 10,
    width: 10,
    backgroundColor: color.white,
    borderRadius: 10 / 2,
    borderWidth: 1,
    borderColor: color.PRIMARY_GREEN,
  },
  dotView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  },
});
