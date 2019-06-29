import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.push('Camera')}>
                <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Localization')}>
                <Text>Localization</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Lottie')}>
                <Text>Animações</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Map')}>
                <Text>Maps</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Pedometer')}>
                <Text>Pedometro (contador de passos)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Speech')}>
                <Text>Discurso</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Video')}>
                <Text>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Browser')}>
                <Text>Browser</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home
