import React from 'react'
import { Picker } from "react-native"

class PickerGender extends React.Component {
    state = {
        gender: ''
    }

    handleChange = (gender) => {
        console.log(gender)
        this.setState({gender: itemValue})
        this.props.setGender(gender)
      }

    render () {
        return (
            <Picker
                selectedValue={this.state.gender}
                style={{height: 100, width:100}}
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