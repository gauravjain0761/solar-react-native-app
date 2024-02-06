import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppStyles } from '../../Theme/AppStyles'
import { color } from '../../Theme/color'
import VideoPlayer from 'react-native-video-player'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Theme/Fonts'
import { useIsFocused } from '@react-navigation/core'


type Props = {
    videoUrl: any
}

const FullScreenVideo = ({ videoUrl }: Props) => {
    const [fullScreen, setFullScreen] = useState(false);
    const isFocused = useIsFocused()

    return (
        <View style={[AppStyles.container, { backgroundColor: color.black, }]}>
            <VideoPlayer
                video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                videoWidth={SCREEN_WIDTH}
                // videoHeight={500}
                // resizeMode={'contain'}
                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
            />
        </View>
    )
}

export default FullScreenVideo

const styles = StyleSheet.create({})