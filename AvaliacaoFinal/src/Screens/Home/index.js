import React, { Component } from 'react'
import { Container, Text, Button, CardShadow } from '../../components';
import { FlatList, StyleSheet, View, Alert } from "react-native";
import { getClients, clearClient, delClient } from '../../services/client'
import Swipeout from 'react-native-swipeout'

class Home extends Component {

    state = {
        data: [],
    };

    async componentDidMount () { this.updateData() }

    handleAddClient = async () => { this.props.navigation.navigate('AddClient', { updateData: this.updateData } ) }  

    handleClearClient = async () => { 

        Alert.alert(
            'Atenção',
            'Deseja realmente apagar tudo?',
            [
                {
                  text: 'Não',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'Sim', onPress: async () => {
                    await clearClient()
                    await this.updateData()
                    }
                }
              ],
              {cancelable: false},            
        )        

    }

    updateData = async () => {

        const clients = await getClients()
        
        this.setState({data: clients})
    };
    
    async swipeHandleDelete(cliente){

        await Alert.alert(
            'Atenção',
            'Deseja apagar o cliente: ' + cliente.name + '?',
            [
                {
                  text: 'Não',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'Sim', onPress: async () => {
                    await delClient(cliente)
                    await this.updateData()
                    }
                }
              ],
              {cancelable: false},            
        )
    }

    async swipeHandleEdit(cliente){
        this.props.navigation.navigate('AddClient', { updateData: this.updateData, cliente })
    }

    render () {

        const { data } = this.state
        
        return (
            <>
            <Container>
                <FlatList
                    data={data}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => {
                        return (
                        <Swipeout style={styles.swipe} right={[
                                {
                                 text: 'Delete',
                                 onPress: ()=>(this.swipeHandleDelete(item)),
                                 backgroundColor: '#e86666',
                                 color: 'white',
                                },
                                {
                                 text: 'Editar',
                                 onPress: ()=>(this.swipeHandleEdit(item)),
                                 backgroundColor: '#61aef2',
                                 color: 'white',
                                },
                            ]} 
                            backgroundColor={'white'}
                            autoClose={true}
                            >
                            <View style={styles.item}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.email}>{item.email}</Text>
                            </View>
                        </Swipeout>
                        );
                    }}
                />    
                <CardShadow>
                    <Button onPress={this.handleAddClient}>Adicionar Cliente</Button>
                    <Button onPress={this.handleClearClient}>Apagar Tudo</Button>
                </CardShadow>
            </Container>
            </>
        )
    }    
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: "#eff2d0",
      flexGrow: 1,
      margin: 0,
      padding: 20,
      width: 360,
    },
    name: {
      color: "#333333",
      fontWeight:"bold",
      borderBottomWidth: 0
    },
    email: {
      color: "#333333",
      borderBottomWidth: 0
    },
    swipe: {
        marginTop: 5,
    }
  });

export default Home