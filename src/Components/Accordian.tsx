import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  UIManager,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '../Theme/color';
import {hp} from '../Theme/Fonts';

type Props = {
  data: any;
};

const Accordian: React.FC<Props> = ({data}) => {
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
          <Text>{data.data}</Text>
        </View>
      )}
    </View>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: color.PRIMARY_GREEN,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: color.white,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.65,
    elevation: 10,
    marginTop: hp(2),
  },
  parentHr: {
    height: 1,
    color: color.white,
    width: '100%',
  },
  child: {
    backgroundColor: color.white,
    padding: 16,
  },
});
