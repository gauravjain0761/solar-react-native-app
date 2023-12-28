import { Image, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import React from 'react'
import { color } from '../Theme/color'
import { SEARCHINPUT } from '../Theme/Resources'
import { hp, commonFontStyle } from '../Theme/Fonts'

type Props = {
    value: any,
    onChangeText: (text: any) => void
    placeHolder?: string
    containerStyle?: ViewStyle
}

const SearchInput = ({ value, onChangeText, placeHolder, containerStyle }: Props) => {
    return (
        <View style={[styles.mainView, containerStyle]}>
            <TextInput
                value={value}
                onChangeText={(text) => onChangeText(text)}
                placeholder={placeHolder ? placeHolder : ''}
                placeholderTextColor={color.gray_3}
                style={styles.input}
            />

            <Image source={SEARCHINPUT} style={styles.imageSearch} />

        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: color.gray_2,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageSearch: {
        height: hp(3),
        resizeMode: 'contain',
        width: hp(3),
        marginHorizontal: hp(2)
    },
    input: {
        flex: 1,
        height: 50,
        ...commonFontStyle(400, 16, color.titleDarkBlue),
        paddingLeft: hp(2),
    }
})