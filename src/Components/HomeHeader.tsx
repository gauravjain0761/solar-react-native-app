import { StatusBar, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../Theme/color'
import { CUSTOMER_SIGNUP, MENU } from '../Theme/Resources'
import { hp, commonFontStyle } from '../Theme/Fonts'

type Props = {}

const HomeHeader = (props: Props) => {
    return (
        <ImageBackground resizeMode='cover' source={require('../assets/headerBg.png')} style={styles.headerView}>
            <View style={styles.headerViewRow}>
                <TouchableOpacity>
                    <Image style={styles.imageMenu} source={MENU} />
                </TouchableOpacity>
                <View style={styles.nameView}>
                    <Text style={styles.hiText}>Hi</Text>
                    <Text style={styles.nameText}>Gaurav</Text>
                </View>
                <TouchableOpacity>
                    <Image style={styles.imageProfile} source={CUSTOMER_SIGNUP} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: color.btnOrange,
        height: 130,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        paddingTop: StatusBar.currentHeight
    },
    headerViewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageMenu: {
        height: 25, width: 25, resizeMode: 'contain',
        margin: hp(2)
    },
    nameView: {
        marginTop: hp(2),
        flex: 1,
    },
    hiText: {
        ...commonFontStyle(700, 16, color.white)
    },
    nameText: {
        ...commonFontStyle(700, 23, color.white)
    },
    imageProfile: {
        backgroundColor: color.white,
        height: 50, width: 50, resizeMode: 'center',
        borderRadius: 50 / 2,
        margin: hp(2)
    }
})