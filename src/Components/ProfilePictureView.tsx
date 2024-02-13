import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { commonFontStyle, hp } from '../Theme/Fonts';
import { color } from '../Theme/color';
import Modal from 'react-native-modal';
import ActionSheet from './ActionSheet';
import ImageCropPicker from 'react-native-image-crop-picker';
import { AppStyles } from '../Theme/AppStyles';

type Props = {
    value: any;
    onChangeText?: (text: any) => void;
    style?: any;
}

const ProfilePictureView = ({ value,
    onChangeText,
    style, }: Props) => {
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
        ImageCropPicker.openCamera({
            mediaType: 'photo',
        }).then(image => {
            closeActionSheet();
            console.log(image);
            if (Platform.OS == "android") {
                image.sourceURL = image.path;
            } else {
                if (image.sourceURL == null) {
                    image.sourceURL = image.path;
                }
            }
            let temp = { ...image, name: 'image_' + new Date().getTime() + '.png', };
            onChangeText(temp);
        });
    };
    const openGallery = () => {
        ImageCropPicker.openPicker({
            mediaType: 'photo',
        }).then(image => {
            closeActionSheet()
            if (Platform.OS == "android") {
                image.sourceURL = image.path;
            } else {
                if (image.sourceURL == null) {
                    image.sourceURL = image.path;
                }
            }
            let temp = { ...image, name: image.path.split('/').pop(), };
            onChangeText(temp);
        });
    };
    const [actionSheet, setActionSheet] = useState(false);
    const closeActionSheet = () => setActionSheet(false);
    return (
        <View style={[styles.container, { ...style }]}>
            <TouchableOpacity
                onPress={() => setActionSheet(true)}
                style={[styles.input]}>
                {value ?
                    <Image
                        source={
                            value ? { uri: value.path } : require('../assets/IconUpload.png')
                        }
                        style={styles.ImageSelected}
                    />

                    :
                    <Image
                        source={
                            value ? { uri: value.path } : require('../assets/IconUpload.png')
                        }
                        style={styles.addImageIcon}
                    />

                }
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
    )
}

export default ProfilePictureView

const styles = StyleSheet.create({
    title: {
        ...commonFontStyle(700, 14, color.titleTextInputDarkBlue),
        marginBottom: 8,
    },
    input: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
        marginBottom: hp(3),
        ...commonFontStyle(400, 12, color.titleTextInputDarkBlue),
        backgroundColor: color.white,
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: color.gray_2,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: color.mainBgColor,
    },
    text: { ...commonFontStyle(400, 14, color.placeholderTextGray) },
    addImageIcon: {
        height: hp(3.5),
        width: hp(3.5),
        resizeMode: 'cover',
        borderRadius: 5,
    },
    ImageSelected: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
        resizeMode: 'cover'
    }
})