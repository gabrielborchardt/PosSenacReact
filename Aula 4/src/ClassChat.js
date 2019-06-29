import React, { Fragment }  from 'react'
import { Vibration, Button } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import Socket from 'socket.io-client'
import { store, getMessages } from '../database'
import Camera from './Camera'

const ws = Socket('https://senac-shopping-list-api.herokuapp.com', {
  transports: ['websocket'],
  jsonp: false
})

const myId = 'Gabriel'
const perPage = 10
const vibrationTime = 500;

class Chat extends React.Component {

    state = {
        messages: [],
        page: 1,
        totalPages: 1,
        isLoading: false,
        isVisibleCam: false,
        image: null
    }

    async componentDidMount() {

        this.listMessages()

        ws.connect()
        ws.on('message', message => {
            this.setStore(message)
            if (myId !== message.user._id) {
                this.setState({ 
                    messages: GiftedChat.append(this.state.messages, message) 
                })

                Vibration.vibrate(vibrationTime);
            }
        })
    }

    setStore = async message => {
        await store(message)
    }

    loadNextPage = () =>{
        this.setState({
            page: this.state.page + 1,
            isLoading: true
        }, () => {
            this.listMessages()
        })
    }

    listMessages = async () => {
        const messagesList = await getMessages(this.state.page, perPage)

        this.setState({
            messages: GiftedChat.prepend(this.state.messages, messagesList.messages),
            isLoading: false,
            totalPages: messagesList.totalPages
        })
    }

    sendMessage = newMessages => {
        
        const { image } = this.state

        if (newMessages[0].text.length < 5) {
            alert('Mensagem tem que ter mais de 5 caracteres')
        }

        const imageMessage = [{...newMessages[0], image}]

        const namedMessage = [
            {
                ...imageMessage[0],
                user: {_id: myId, name: myId}
            }
        ]
        
        this.setState({ 
            messages: GiftedChat.append(this.state.messages, namedMessage),
            image: null
        })

        ws.emit('message', namedMessage[0])
    }

    renderCamera(value){
        this.setState({
            isVisibleCam: value
        })
    }

    setImage = (image) => {
        this.setState({
            image
        })
    }

    render() {
        const { messages, isLoading, page, totalPages, isVisibleCam} = this.state
        return (
            <Fragment>
            <Camera
                visible={isVisibleCam}
                close={() => this.renderCamera(false)}
                callback={this.setImage}
            />

            <GiftedChat
                isLoadingEarlier={isLoading}
                loadEarlier={page <= totalPages}          
                onLoadEarlier={this.loadNextPage}
                messages={messages}
                onSend={this.sendMessage}
                renderAvatar={null}
                renderUsernameOnMessage
                renderActions={ () => {
                    return (
                        <Button
                            onPress={() => this.renderCamera(true)}
                            title="Photo"
                        />
                    );
                }}
                user={{
                _id: myId,
                }}
            />
          </Fragment>
        )
      }
}

export default Chat