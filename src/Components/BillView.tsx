import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {commonFontStyle, hp} from '../Theme/Fonts';
import {color} from '../Theme/color';
import Modal from 'react-native-modal';
import ActionSheet from './ActionSheet';
import ImageCropPicker from 'react-native-image-crop-picker';
import {AppStyles} from '../Theme/AppStyles';

type Props = {
  value: any;
  placeholder: string;
  onChangeText?: (text: any) => void;
  title: string;
  style?: any;
};

const BillView: React.FC<Props> = ({
  value,
  placeholder,
  onChangeText,
  title,
  style,
}) => {
  const actionItems = [
    {
      id: 1,
      label: 'Open Camera',
      onPress: () => {
        openPicker();
      },
    },
    {
      id: 2,
      label: 'Open Gallery',
      onPress: () => {
        openGallery();
      },
    },
  ];
  const openPicker = () => {
    closeActionSheet();
    ImageCropPicker.openCamera({
      mediaType: 'photo',
    }).then(image => {
      console.log(image);
      let temp = {
        ...image,
        name: 'image_' + new Date().getTime() + '.png',
      };
      onChangeText(temp);
    });
  };
  const openGallery = () => {
    closeActionSheet();
    ImageCropPicker.openPicker({
      mediaType: 'photo',
    }).then(image => {
      let temp = {
        ...image,
        name: image.path.split('/').pop(),
      };
      onChangeText(temp);
    });
  };
  const [actionSheet, setActionSheet] = useState(false);
  const closeActionSheet = () => setActionSheet(false);
  return (
    <View style={[styles.container, {...style}]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TouchableOpacity
        onPress={() => setActionSheet(true)}
        style={[styles.input]}>
        <Image
          source={
            value ? {uri: value.path} : require('../assets/images/addimage.png')
          }
          style={styles.addImageIcon}
        />
        <View style={AppStyles.flex}>
          {value ? (
            <Text style={styles.text}>{value.name}</Text>
          ) : (
            <Text style={[styles.text, {color: 'rgba(0,0,0,0.3)'}]}>
              {placeholder}
            </Text>
          )}
        </View>
      </TouchableOpacity>
      <Modal
        onBackdropPress={() => closeActionSheet()}
        isVisible={actionSheet}
        style={{
          margin: 0,
          justifyContent: 'flex-end',
        }}>
        <ActionSheet actionItems={actionItems} onCancel={closeActionSheet} />
      </Modal>
    </View>
  );
};

export default BillView;

const styles = StyleSheet.create({
  title: {
    ...commonFontStyle(400, 18, color.black),
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: color.input_border,
    height: hp(7),
    paddingHorizontal: hp(2),
    borderRadius: 15,
    marginBottom: hp(3),
    ...commonFontStyle(400, 18, color.black),
    borderStyle: 'dashed',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    backgroundColor: color.white,
  },
  text: {...commonFontStyle(400, 18, color.black)},
  addImageIcon: {
    height: hp(4),
    width: hp(4),
    resizeMode: 'cover',
    marginRight: hp(1),
    borderRadius: 5,
  },
});
