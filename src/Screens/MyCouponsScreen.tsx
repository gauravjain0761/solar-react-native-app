import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp, commonFontStyle} from '../Theme/Fonts';
import {color} from '../Theme/color';

type Props = {};

const listCoupons = [
  {
    id: 1,
    code: 'UBX25',
    title: 'Get 25% discount on order about  AED 50',
    btnTitle: 'Active',
    borderShow: false,
  },
  {
    id: 2,
    code: 'WEL10',
    title: 'Get 10% discount for  first time users',
    btnTitle: 'Active',
    borderShow: true,
  },
  {
    id: 3,
    code: 'EXT50',
    title: 'Get 50% discount on order about  AED 200',
    btnTitle: 'Expired',
    borderShow: false,
  },
  {
    id: 4,
    code: 'EXT20',
    title: 'Get 20% discount on order about  AED 200',
    btnTitle: 'Expired',
    borderShow: true,
  },
  {
    id: 5,
    code: 'EXT60',
    title: 'Get 60% discount on order about  AED 200',
    btnTitle: 'Active',
    borderShow: false,
  },
  {
    id: 6,
    code: 'EXT50',
    title: 'Get 50% discount on order about  AED 200',
    btnTitle: 'Expired',
    borderShow: true,
  },
  {
    id: 7,
    code: 'EXT40',
    title: 'Get 40% discount on order about  AED 200',
    btnTitle: 'Active',
    borderShow: false,
  },
];

const CouponsList = ({item}) => {
  return (
    <View
      style={[
        styles.couponeStyle,
        {
          borderTopWidth: item?.borderShow ? 1 : 0,
          borderBottomWidth: item?.borderShow ? 1 : 0,
          borderColor: color.black_30,
        },
      ]}>
      <View style={styles.cardHeaderStyle}>
        <TouchableOpacity>
          <Text style={styles.leftText}>{item?.code}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={[
              styles.rightText,
              {color: item?.btnTitle == 'Expired' ? color.gray : 'green'},
            ]}>
            {item?.btnTitle}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.titleStyle}>{item?.title}</Text>
    </View>
  );
};

const MyCouponsScreen = (props: Props) => {
  return (
    <ScrollView style={styles.mainStyle} showsVerticalScrollIndicator={false}>
      {listCoupons.map(item => {
        return <CouponsList item={item} />;
      })}
    </ScrollView>
  );
};

export default MyCouponsScreen;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    marginTop: hp(5),
    marginHorizontal: wp(5),
  },
  cardHeaderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftText: {
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: wp(12),
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: 'green',
    ...commonFontStyle(700, 18, color.black),
  },
  rightText: {
    ...commonFontStyle(400, 18, 'green'),
  },
  titleStyle: {
    width: '60%',
    marginTop: hp(1),
    ...commonFontStyle(400, 18, color.black_50),
  },
  couponeStyle: {
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
});
