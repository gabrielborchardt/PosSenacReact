import React from 'react'
import { Picker } from "react-native"

class PickerGender extends React.Component {
    state = {
        gender: 'M'
    }

    handleChange = (gender) => {
        this.setState({gender: gender})
        this.props.gender(gender)
    }

    render () {
        return (
            <Picker
                selectedValue={this.props.initialValue ? this.props.initialValue : this.state.gender}
                style={{height: 100, width:100}}
                onValueChange={(itemValue, itemIndex) => this.handleChange(itemValue)}>
                <Picker.Item label="Masculino" value="M" />
                <Picker.Item label="Feminino" value="F" />
            </Picker>
        )
    }
}

export default PickerGender