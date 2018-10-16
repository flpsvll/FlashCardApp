import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { saveDeckTitle } from '../utils/spi'
import { AddDeck, addDeck } from '../actions'

class AddDeck extends React.Component {

    state = {
        text: ''
    }
    submitName = () => {
        const { text } = this.state

        saveDeckTitle(text)
        this.props.dispatch(addDeck(text))
        this.props.navigation.navigate('DeckView', { eb })
    }

    render(){
        return (
            <View style={style.container}>
                <text> What is the new decks name? </text>
                <TextInput> onChangeText={(text) => this.setState({ text: text })}
                            value={this.state.text}>
                
                </TextInput>
                <Button onPress={this.submitName}
                        title='submit'>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
})

export default AddDeck