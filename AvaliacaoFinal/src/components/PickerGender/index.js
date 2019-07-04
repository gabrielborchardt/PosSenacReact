import React from 'react'
import { Picker } from "react-native"

class PickerGender extends React.Component {
    state = {
        gender: null
    }

    render () {
        return (
            <Picker
                selectedValue={this.state.gender}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({gender: itemValue})
                }>
                <Picker.Item label="Masculino" value="M" />
                <Picker.Item label="Feminino" value="F" />
            </Picker>
        )
    }
}

export default PickerGender

