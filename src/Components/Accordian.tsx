import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  UIManager,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { color } from '../Theme/color';
import { hp, commonFontStyle } from '../Theme/Fonts';
import { AppStyles } from '../Theme/AppStyles';

type Props = {
  data: any;
};

const Accordian: React.FC<Props> = ({ data }) => {
  const [expandable, setexpandable] = useState(false);
  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setexpandable(!expandable);
  };

  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
        <Text style={[styles.title, styles.font]}>{data.title}</Text>
        {/* <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.DARKGRAY} /> */}
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expandable && (
        <View style={styles.child}>
          <Text style={styles.desText}>{data.data}</Text>
        </View>
      )}
    </View>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  title: {
    ...commonFontStyle(700, 16, color.titleDarkBlue)
  },
  desText: {
    ...commonFontStyle(400, 14, color.gray_2)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: color.white,
    marginTop: hp(2),
    marginHorizontal: hp(2),
    ...AppStyles.shadowview,
    borderRadius: 10
  },
  parentHr: {
    height: 1,
    color: color.white,
    width: '100%',
  },
  child: {
    backgroundColor: color.white,
    padding: 16,
    marginHorizontal: hp(2),
    borderRadius: 10,
    ...AppStyles.shadowview,
  },
});
