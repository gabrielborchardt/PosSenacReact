import React from 'react'
import { Image } from '../../components'
import { Text, View, TouchableOpacity, TouchableHighlight, Modal, CameraRoll, ScrollView, StyleSheet, Dimensions } from 'react-native'

let styles
const { width } = Dimensions.get('window')  

export default class CameraRollView extends React.Component {

    state = {
        photos: [],
        index: null,
    }

    async componentDidMount () {
        this.getPhotos()
    }
    
    getPhotos = () => {
        CameraRoll.getPhotos({
          first: 100,
          assetType: 'Photos'
        })
        .then(r => this.setState({ photos: r.edges }))
    }

    setImage = (index) => {
        
        if (index !== null){
            this.setState({ 
                index,
            })

            const imagem = this.state.photos[index].node.image.uri
            this.onPictureSaved(imagem)
        }
    }
    
      onPictureSaved = async photo => {
        this.props.callback(photo)
      }    
    
    render () {
        const { index, photos } = this.state
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.visible}
                onRequestClose={() => console.log('closed')}
                >
                <View style={styles.modalContainer}>

                    <TouchableOpacity onPress={this.props.close}>
                        <Text style={{ color: '#000' }}>fechar</Text>
                    </TouchableOpacity>

                    <ScrollView
                    contentContainerStyle={styles.scrollView}>
                    {
                        photos.map((p, i) => {
                        return (
                            <TouchableHighlight
                                style={{opacity: i === index ? 0.5 : 1}}
                                key={i}
                                underlayColor='transparent'
                                onPress={() => this.setImage(i)}
                            >
                            <Image
                                style={{
                                width: width/3,
                                height: width/3
                                }}
                                source={{uri: p.node.image.uri}}
                            />
                            </TouchableHighlight>
                        )
                        })
                    }
                    </ScrollView>
                </View>
            </Modal>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        paddingTop: 20,
        flex: 1
    },
    scrollView: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    shareButton: {
        position: 'absolute',
        width,
        padding: 10,
        bottom: 0,
        left: 0
    }
})