import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { Video } from 'expo-av';

const { width }  = Dimensions.get('window')

export default class VideoComponent extends Component {
    render() {
        return (
            <Video
                useNativeControls
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: width, height: 300 }}
            />
        )
    }
}
