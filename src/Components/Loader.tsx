import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { color } from '../Theme/color';

type Props = {};

const Loader = ({ visible = false }) => {
    return (
        <View style={styles.loaderView}>
            <ActivityIndicator size={'large'} color={color.btnOrange} />
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    loaderView: {
        position: 'absolute',
        zIndex: 1111,
        backgroundColor: 'rgba(255,255,255,0.5)',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
